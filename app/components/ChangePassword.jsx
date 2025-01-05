'use client';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useRouter } from "next/navigation";
function ChangePassword() {
  const searchParams = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Extract UserId and Token from query parameters
  const userId = searchParams.get("userId");
  const token = searchParams.get("token");

  useEffect(() => {
    if (!userId || !token) {
      setMessage("Invalid link. Missing userId or token.");
    }
  }, [userId, token]);

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage(""); // Clear previous messages

  if (!userId || !token) {
    setMessage("Invalid link. Please try again.");
    return;
  }

  if (newPassword !== confirmPassword) {
    setMessage("Passwords do not match.");
    return;
  }

  setLoading(true);

  try {
    // Send POST request with Axios
    const response = await axios.post("https://localhost:7216/api/auth/reset-password", {
      userId,
      token,
      newPassword,
      confirmPassword,
    });
    console.log(response);

    // Handle success response
    if(response.data.isSuccess)
    {
      setMessage(response.data.message || "Password reset successfully.");
    // Wait 3 seconds, then redirect based on user role
    setTimeout(() => {
      // if (response.data.role === "Admin") {
      //   router.push("/admin/home");
      // } else if (response.data.role === "User") {
      //   router.push("/user/home");
      // } else {
      //   router.push("/guest/home"); // Default fallback
      // }
      router.push('/');
    }, 3000);
  }
  } catch (error) {
    // Handle error response
    if (error.response) {
      setMessage(error.response.data.message || "Failed to reset password.");
    } else {
      setMessage("An error occurred. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow-md sm:max-w-md sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Change Password
          </h2>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="new-password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#4F46E5] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#4F46E5] hover:bg-[#4F46E5]"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
          {message && (
            <p
              className={`mt-4 text-sm ${
                message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
