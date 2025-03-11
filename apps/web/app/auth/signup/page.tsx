import Auth from "components/Auth";
import React from "react";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto pt-16">
      <Auth
        component="signup"
        loginHeading="Create Account"
        authWithEmailText="Or sign up with your Email"
        userAuthOption="Already have an account ?"
        userAuthAction="Sign in"
      />
    </main>
  );
};

export default page;
