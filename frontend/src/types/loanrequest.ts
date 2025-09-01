import type { User } from "./user";

export interface LoanRequest {
    id: string;
    amount: number;
    term: number;
    interestRate: number;
    status: string;
    user: User;
}