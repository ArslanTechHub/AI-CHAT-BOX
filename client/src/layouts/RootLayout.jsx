import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Create a client
const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <QueryClientProvider client={queryClient}>
          <header className="flex items-center justify-between ">
            <Link className="flex items-center px-4 py-6 ml-12" to="/">
              <img className="w-8 h-8" src="/logo.png" alt="" />
              <span className="ml-2 font-bold ">AI CHAT BOX</span>
            </Link>
            <div className="flex mr-10">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </QueryClientProvider>
      </ClerkProvider>
    </>
  );
};

export default RootLayout;
