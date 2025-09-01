import React from "react";
import { useQuery } from "@apollo/client/react";
import DashboardContentCard from "./DashboardContentCard";
import { GET_AVAILABLE_LOAN_REQUESTS } from "../graphql/queries";
import { Loader2 } from "lucide-react";

const DashboardContent: React.FC = () => {
  const { loading, error, data } = useQuery(GET_AVAILABLE_LOAN_REQUESTS);

  const handleLend = (loanRequestId: string) => {
    console.log("Lend clicked for loan request:", loanRequestId);
    // TODO: Implement lending logic
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <span className="ml-2">Loading loan requests...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <p>Error</p>
        </div>
      </div>
    );
  }

  const loanRequests = data?.availableLoanRequests || [];

  if (loanRequests.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">No loan requests available at the moment.</p>
      </div>
    );
  }

  return (  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto p-4">
      {loanRequests.map((request: any) => (
        <DashboardContentCard 
          key={request.id} 
          loanRequest={{
            ...request,
            user: {
              id: request.user.id,
              name: request.user.name || `User ${request.user.id}`,
              rating: request.user.rating
            }
          }}
          onLend={handleLend}
        />
      ))}
    </div>
  );
};

export default DashboardContent;