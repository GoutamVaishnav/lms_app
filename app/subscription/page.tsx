import React from "react";
import { auth } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";
import {PricingTable} from "@clerk/nextjs";
const Subscription = async () => {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Subscription Plans</h1>
          <p className="text-lg text-gray-600 mb-6">
            Please sign in to view and manage your subscription
          </p>
          <SignInButton mode="modal">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Sign In
            </button>
          </SignInButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Subscription Plans</h1>
        <p className="text-lg text-gray-600 mb-6">
                    <PricingTable />
        </p>
        {/* Add subscription plans here */}
      </div>
    </div>
  );
};

export default Subscription;
