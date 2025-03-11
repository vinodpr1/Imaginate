import Auth from "components/Auth";
import React from "react";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto pt-16">
      <Auth
        component="signin"
        loginHeading="Log in to your account"
        authWithEmailText="Or log in with your Email"
        userAuthOption="New to leetcode ?"
        userAuthAction="Sign up"
      />
    </main>
  );
};

export default page;
