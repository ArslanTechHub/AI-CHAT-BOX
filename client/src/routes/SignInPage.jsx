import { SignIn } from "@clerk/clerk-react";
import React from "react";


const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SignInPage;
