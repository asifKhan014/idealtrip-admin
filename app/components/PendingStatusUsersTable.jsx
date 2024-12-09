"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const PendingStatusUsersTable = ({ data }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(data);
  }, [data]);

  const handleStatusChange = async (guid, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      console.log(guid);
      console.log(newStatus);

      const endpoint =
        newStatus === "Accepted"
          ? `https://localhost:7216/api/administration/approve-user/${guid}`
          : `https://localhost:7216/api/administration/reject-user/${guid}`;

      const response = await axios.post(endpoint, null, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token correctly
        },
      });

      if (response.data.isSuccess) {
        setPeople((prevPeople) =>
          prevPeople.filter((person) => person.userId !== guid) // Remove the user regardless of the status
        );
        alert(response.data.message);
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error updating user status:", error);
      alert("An error occurred while updating user status.");
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Pending Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list Pending users in your account including their name, role,
            email, status, and related files.
          </p>
        </div>
      </div>
      {people.length > 0 ? ( // Conditional rendering for the table or fallback message
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="sticky top-0 z-10 border-b border-gray-300 bg-white py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="sticky top-0 z-10 border-b border-gray-300 bg-white py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((person, personIdx) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.status}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                        <button
                          onClick={() =>
                            handleStatusChange(person.userId, "Accepted")
                          }
                          className="mr-4 text-green-600 hover:text-green-900"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(person.userId, "Rejected")
                          }
                          className="mr-4 text-red-600 hover:text-red-900"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 text-center text-gray-500">
          <p>No pending users to display.</p>
        </div>
      )}
    </div>
  );
};

export default PendingStatusUsersTable;
