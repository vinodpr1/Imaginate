"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const AuthForm = ({ component }: { component: string }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Submittes");

    const result = await signIn("credentials", {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      alert(result.error);
    } else {
      // router.push("/dashboard");
      redirect("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full pb-6">
      {component === "signup" && (
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">
            <span className="text-sm text-gray-400">Name</span>
          </label>
          <div>
            <input
              name="name"
              className="w-[100%] border border-gray-600 rounded px-4 py-2"
              type="text"
              required
            />
          </div>
        </div>
      )}

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="email">
          <span className="text-sm text-gray-400">Email</span>
        </label>
        <div>
          <input
            name="email"
            className="w-[100%] border border-gray-600 rounded px-4 py-2"
            type="email"
            required
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label htmlFor="password">
          <span className="text-sm text-gray-400">Password</span>
        </label>
        <div>
          <input
            name="password"
            className="w-[100%] border border-gray-600 rounded px-4 py-2"
            type="password"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className=" text-gray-500 py-2 rounded border border-gray-600 w-full flex flex-col gap-2"
      >
        {component === "signin" ? "Log in" : "Sign up"}
      </button>
    </form>
  );
};

export default AuthForm;
