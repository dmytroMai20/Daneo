export interface User {
  id: string;
  name?: string;
  rating?: number;
}

export interface LoanRequest {
  id: string;
  amount: number;
  term: number;
  interestRate: number;
  status: "PENDING" | "APPROVED" | "REJECTED" | "PAID";
  purpose: string;
  repaymentFrequency: "WEEKLY" | "BIWEEKLY" | "MONTHLY";
  user: User;
}

export interface ApiLoanRequest extends Omit<LoanRequest, "user"> {
  user: {
    id: string;
    name?: string | null;
    rating?: number | null;
  };
}

export interface DashboardContentCardProps {
  loanRequest: LoanRequest;
  onLend?: (loanRequestId: string) => void;
}
