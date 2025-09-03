import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Session, User, AuthError } from "@supabase/supabase-js";
import { AuthProvider } from "../AuthContext";
import { useAuth } from "../useAuth";
import * as auth from "../auth";

vi.mock("../../utils/supabaseClient", () => ({
  default: {
    auth: {
      getSession: vi.fn().mockResolvedValue({
        data: {
          session: {
            user: { id: "123" } as User,
          } as Session,
        },
      }),
      onAuthStateChange: vi.fn().mockImplementation((callback) => {
        callback("SIGNED_IN", { user: { id: "123" } as User } as Session);
        return { data: { subscription: { unsubscribe: vi.fn() } } };
      }),
      signUp: vi.fn(),
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
    },
  },
}));

describe("AuthContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("provides user after sign in event", async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await waitFor(() => {
      expect(result.current.user).toBeTruthy();
      expect(result.current.user?.id).toBe("123");
    });
  });
});

describe("auth functions", () => {
  const email = "test@example.com";
  const password = "password123";

  it("signUp calls supabase.auth.signUp", async () => {
    const mockResponse = {
      data: {
        user: { id: "abc" } as User,
        session: {
          user: { id: "abc" } as User,
          access_token: "mock-token",
          refresh_token: "mock-refresh-token",
          expires_in: 3600,
          token_type: "bearer",
        } as Session,
      },
      error: null,
    };

    const signUpMock = vi
      .mocked((await import("../../utils/supabaseClient")).default.auth.signUp)
      .mockResolvedValueOnce(mockResponse);

    const result = await auth.signUp(email, password);
    expect(signUpMock).toHaveBeenCalledWith({ email, password });
    expect(result).toEqual(mockResponse);
  });

  it("signIn calls supabase.auth.signInWithPassword", async () => {
    const mockResponse = {
      data: {
        user: { id: "abc" } as User,
        session: {
          user: { id: "abc" } as User,
          access_token: "mock-token",
          refresh_token: "mock-refresh-token",
          expires_in: 3600,
          token_type: "bearer",
        } as Session,
      },
      error: null,
    };

    const signInMock = vi
      .mocked(
        (await import("../../utils/supabaseClient")).default.auth
          .signInWithPassword,
      )
      .mockResolvedValueOnce(mockResponse);

    const result = await auth.signIn(email, password);
    expect(signInMock).toHaveBeenCalledWith({ email, password });
    expect(result).toEqual(mockResponse);
  });

  it("signOut calls supabase.auth.signOut", async () => {
    const signOutMock = vi
      .mocked((await import("../../utils/supabaseClient")).default.auth.signOut)
      .mockResolvedValueOnce({ error: null });

    await auth.signOut();
    expect(signOutMock).toHaveBeenCalled();
  });

  it("signOut throws if supabase.auth.signOut returns error", async () => {
    const error = new Error("Sign out failed") as AuthError & {
      __isAuthError: boolean;
    };
    error.status = 400;
    error.code = "auth/sign-out-failed";
    error.__isAuthError = true;

    const signOutMock = vi
      .mocked((await import("../../utils/supabaseClient")).default.auth.signOut)
      .mockResolvedValueOnce({ error });

    await expect(auth.signOut()).rejects.toThrow("Sign out failed");
    expect(signOutMock).toHaveBeenCalled();
  });
});
