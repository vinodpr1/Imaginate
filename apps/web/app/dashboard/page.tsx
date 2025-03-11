"use client";
import Dashboard from "components/Dashboard";
import React from "react";
// import { getServerSession } from 'next-auth'
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <SessionProvider>
      <div className="pt-32">
        <Dashboard />
      </div>
    </SessionProvider>
  );
};

export default page;
