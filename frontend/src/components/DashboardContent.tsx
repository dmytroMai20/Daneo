import React from "react";
import DashboardContentCard from "./DashboardContentCard";

const DashboardContent: React.FC = () => {
  return (  
    <div className="flex flex-col gap-6 container mx-auto justify-center items-center">
      <DashboardContentCard />
      <DashboardContentCard />
    </div>
  )
}

export default DashboardContent