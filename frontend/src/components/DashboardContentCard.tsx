import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface User {
  id: string;
  name?: string;
  rating?: number;
}

export interface LoanRequest {
  id: string;
  amount: number;
  term: number;
  interestRate: number;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'PAID';
  purpose: string;
  repaymentFrequency: 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY';
  user: User;
}

interface DashboardContentCardProps {
  loanRequest: LoanRequest;
  onLend?: (loanRequestId: string) => void;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const getFrequencyLabel = (frequency: string, term: number) => {
  const frequencyMap: Record<string, string> = {
    'WEEKLY': 'week',
    'BIWEEKLY': '2-weeks',
    'MONTHLY': 'month'
  };
  
  const period = frequencyMap[frequency] || 'period';
  return `${term} ${term === 1 ? period : frequency === "BIWEEKLY" ? period : period + 's'}`;
};

const DashboardContentCard: React.FC<DashboardContentCardProps> = ({ 
  loanRequest,
  onLend
}) => {
  const {
    id,
    amount,
    term,
    interestRate,
    purpose,
    repaymentFrequency,
    status,
    user
  } = loanRequest;

  const interestAmount = (amount * interestRate) / 100;
  const totalRepayment = amount + interestAmount;
  const paymentAmount = totalRepayment / term;

  return (
    <Card className="w-full max-w-md hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} 
                alt={user.name || 'User'}
              />
              <AvatarFallback>
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">
                {user.name || `User ${user.id}`}
                {user.rating && (
                  <span className="ml-2 text-sm text-yellow-600">
                    ★{user.rating.toFixed(1)}
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground">
                {purpose}
              </p>
            </div>
          </div>
          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
            {status}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Loan Amount</p>
            <p className="font-medium">{formatCurrency(amount)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Interest Rate</p>
            <p className="font-medium">{interestRate}%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Term</p>
            <p className="font-medium">
              {getFrequencyLabel(repaymentFrequency, term)}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Repayment</p>
            <p className="font-medium">{formatCurrency(totalRepayment)}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground">Payment per {repaymentFrequency.toLowerCase()}</p>
            <p className="font-medium">{formatCurrency(paymentAmount)}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => onLend && onLend(id)}
        >
          Lend Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DashboardContentCard;