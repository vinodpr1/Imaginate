"use client";
import Dashboard from 'components/Dashboard'
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const page = () => {

  return (
        <SessionProvider>
           <main className='pt-20 min-h-screen bg-background max-w-6xl mx-auto px-2'>
             <Dashboard />
           </main>
        </SessionProvider>
   ) 
}

export default page