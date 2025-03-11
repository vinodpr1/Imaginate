import React from "react";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const data = useSession();
  return <div>Dashboard {JSON.stringify(data)}</div>;
};

export default Dashboard;
