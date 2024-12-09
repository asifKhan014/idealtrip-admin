"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(Email);
      console.log(Password)
      const result = await axios.post(
        "https://localhost:7216/api/auth/admin-login",
        { Email, Password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (result.data.isSuccess) {
        const token = result.data.messege;  // Token
        const user = result.data.data;      // User data

        // Set the token and user in the AuthContext and localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        // Redirect to home page
        router.push("/");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        setError(error.response.data.messege || "Unexpected error");
      } else {
        console.error("Error:", error.message);
        setError("Login failed: An unexpected error occurred.");
      }
    }
  };

  const handleForgetPassword = () => {
    router.push("/forgot-password");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/travel.png"
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && <div className="text-red-500 text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/forgot-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                    onClick={handleForgetPassword}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm placeholder-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
