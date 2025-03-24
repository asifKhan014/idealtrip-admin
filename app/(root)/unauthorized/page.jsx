import React from "react";
import { Link } from "react-router-dom";

export default function UnauthorizedPage({darkMode}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Unauthorized</h2>
        <p className="text-xl text-gray-600 mb-6">You don't have access to this page.</p>
        <p className="text-base text-gray-500 mb-4">
          Please <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-semibold">login</Link> to access this page.
        </p>
        <div className="mt-6">
          <Link
            to="/login"
            className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors duration-300"
          >
            Go to Login Page
          </Link>
        </div>
      </div>
    </div>
  );
}
