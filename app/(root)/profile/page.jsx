"use client";
import React, { useState } from "react";

function page() {
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Add logic to save user changes
    alert("Changes saved successfully!");
    setEditMode(false);
  };

  const handleDeleteAccount = () => {
    // Add delete account logic
    const confirmDelete = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      alert("Account deleted.");
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4 max-w-lg">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="https://readymadeui.com/team-1.webp"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover shadow-md"
          />
          <label
            htmlFor="upload-profile-pic"
            className="absolute bottom-0 right-0 bg-indigo-600 text-white text-sm px-2 py-1 rounded-full cursor-pointer shadow-md"
          >
            Change
          </label>
          <input
            type="file"
            id="upload-profile-pic"
            className="hidden"
            onChange={(e) => {
              // Handle profile picture upload
              alert("Profile picture updated!");
            }}
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg text-gray-800 font-bold">John Doe</p>
          <p className="text-sm text-gray-500 mt-1">m77468934@gmail.com</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800">
          Personal Information
        </h2>
        <div className="mt-4">
          {editMode ? (
            <>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Email
              </label>
              <input
                type="email"
                defaultValue="m77468934@gmail.com"
                className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Address
              </label>
              <input
                type="text"
                defaultValue="123 Street, City, Country"
                className="w-full mt-2 p-3 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Username</p>
                <p className="text-gray-800">John Doe</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Email</p>
                <p className="text-gray-800">m77468934@gmail.com</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Address</p>
                <p className="text-gray-800">123 Street, City, Country</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {editMode ? (
          <button
            onClick={handleSave}
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200"
          >
            Edit Profile
          </button>
        )}
        <button
          className="w-full py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-200"
          onClick={() => alert("Password change modal or page opens.")}
        >
          Change Password
        </button>
        <button
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-200"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default page;
