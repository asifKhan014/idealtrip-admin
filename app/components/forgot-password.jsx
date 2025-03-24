"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function ForgotPassword() {
  const [emailAddress, setEmail] = useState(""); // State to hold form input
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
  
      // Send a POST request to the API with the email, setting the Content-Type to application/json
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/forgot-password`,
        {
          emailAddress,
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure the request body is sent as JSON
          },
        }
      );
  
      if (result.data.isSuccess) {
        router.push(`/verify-email?email=${encodeURIComponent(emailAddress)}`);
      } else {
        console.error("Something went wrong:", result.data);
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <main id="content" role="main" className="w-full max-w-md mx-auto p-6 ">
      <div className="mt-7 bg-white rounded-xl shadow-lg border-2">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?
              <a
                className="text-[#4F46E5] pl-1 decoration-2 hover:underline font-bold"
                href="/login"
              >
                Login here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-bold ml-1 mb-2"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={emailAddress}
                      onChange={(e) => setEmail(e.target.value)} // Update state on input change
                      className="py-3 px-4 block w-full border-2 rounded-md text-sm focus:ring-[#4F46E5] shadow-sm"
                      required
                      aria-describedby="email-error"
                    />
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#4F46E5] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
