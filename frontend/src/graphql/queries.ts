import { gql } from '@apollo/client';

export const GET_AVAILABLE_LOAN_REQUESTS = gql`
  query GetAvailableLoanRequests {
  availableLoanRequests {
    id
    amount
    term
    interestRate
    status
    purpose
    repaymentFrequency
    user {
      id
    }
  }
}
`;
