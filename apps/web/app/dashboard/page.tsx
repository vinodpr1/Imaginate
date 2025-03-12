"use client";
import Dashboard from "components/Dashboard";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

const page = () => {
  return (
    <SessionProvider>
      <main className="px-4">
        <Dashboard />
      </main>
    </SessionProvider>
  );
};

export default page;
