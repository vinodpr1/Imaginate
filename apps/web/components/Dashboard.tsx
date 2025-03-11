import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  const data = useSession();
  console.log(data);

  if(data?.status == "unauthenticated"){
     redirect("/api/auth/signin");
     return null;
  }

  if (data?.status === "loading") {
    return <p>Loading...</p>;
  }

  return(
     <div>
        <h1>Real logic to train and generate the model</h1>
        <h1>Protected Page</h1>
        <p>Welcome, {data?.data?.user?.name}!</p>
        <p>Email: {data?.data?.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
  </div>
  )
};

export default Dashboard;
