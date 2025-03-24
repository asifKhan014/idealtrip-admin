// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const PendingStatusUsersTable = ({ data }) => {
//   const [people, setPeople] = useState([]);

//   useEffect(() => {
//     setPeople(data);
//   }, [data]);

//   const handleStatusChange = async (guid, newStatus) => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log(guid);
//       console.log(newStatus);

//       const endpoint =
//         newStatus === "Accepted"
//           ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/approve-user/${guid}`
//           : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/reject-user/${guid}`;

//       const response = await axios.post(endpoint, null, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Pass the token correctly
//         },
//       });

//       if (response.data.isSuccess) {
//         setPeople(
//           (prevPeople) => prevPeople.filter((person) => person.userId !== guid) // Remove the user regardless of the status
//         );
//         alert(response.data.message);
//       } else {
//         alert(`Error: ${response.data.message}`);
//       }
//     } catch (error) {
//       console.error("Error updating user status:", error);
//       alert("An error occurred while updating user status.");
//     }
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h1 className="text-base font-semibold text-gray-900">
//             Pending Users
//           </h1>
//           <p className="mt-2 text-sm text-gray-700">
//             A list Pending users in your account including their name, role,
//             email, status, and related files.
//           </p>
//         </div>
//       </div>
//       {people.length > 0 ? ( // Conditional rendering for the table or fallback message
//         <div className="mt-8 flow-root">
//           <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle">
//               <table className="min-w-full border-separate border-spacing-0">
//                 <thead>
//                   <tr>
//                     <th className="sticky top-0 z-10 border-b border-gray-300 bg-white py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
//                       Name
//                     </th>
//                     <th className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                       Role
//                     </th>
//                     <th className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                       Email
//                     </th>
//                     <th className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                       Status
//                     </th>
//                     <th className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                       Files
//                     </th>
//                     <th className="sticky top-0 z-10 border-b border-gray-300 bg-white py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {people.map((person, personIdx) => (
//                     <tr key={person.email}>
//                       <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
//                         {person.fullName}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {person.role}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {person.email}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {person.status == 0 ? "Pending" : "Approved"}
//                       </td>
//                       <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                         {person.proofs && person.proofs.length > 0 ? (
//                           person.proofs.map((proof, idx) => (
//                             <div key={idx} className="mb-2">
//                               <p>{proof.documentType}:</p>
//                               <a
//                                 href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${proof.documentPath}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 hover:underline"
//                               >
//                                 View File
//                               </a>
//                             </div>
//                           ))
//                         ) : (
//                           <p>No proofs uploaded.</p>
//                         )}
//                       </td>

//                       <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
//                         <button
//                           onClick={() =>
//                             handleStatusChange(person.userId, "Accepted")
//                           }
//                           className="mr-4 text-green-600 hover:text-green-900"
//                         >
//                           Accept
//                         </button>
//                         <button
//                           onClick={() =>
//                             handleStatusChange(person.userId, "Rejected")
//                           }
//                           className="mr-4 text-red-600 hover:text-red-900"
//                         >
//                           Reject
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="mt-8 text-center text-gray-500">
//           <p>No pending users to display.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PendingStatusUsersTable;


// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const PendingStatusUsersTable = ({ data, darkMode }) => {
//   const [people, setPeople] = useState([]);

//   useEffect(() => {
//     setPeople(data);
//   }, [data]);

//   const handleStatusChange = async (guid, newStatus) => {
//     try {
//       const token = localStorage.getItem("token");
//       const endpoint =
//         newStatus === "Accepted"
//           ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/approve-user/${guid}`
//           : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/reject-user/${guid}`;

//       const response = await axios.post(endpoint, null, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.data.isSuccess) {
//         setPeople((prevPeople) => prevPeople.filter((person) => person.userId !== guid));
//         alert(response.data.message);
//       } else {
//         alert(`Error: ${response.data.message}`);
//       }
//     } catch (error) {
//       console.error("Error updating user status:", error);
//       alert("An error occurred while updating user status.");
//     }
//   };

//   return (
//     <div className={`px-8 py-6 shadow-lg rounded-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
//       {/* Header Section */}
//       <div className="flex justify-between items-center border-b pb-4 mb-4">
//         <div>
//           <h1 className="text-3xl font-bold">Pending Users</h1>
//           <p className="mt-2 text-lg text-gray-500">Manage pending user approvals and rejections.</p>
//         </div>
//       </div>

//       {/* Table Container */}
//       <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">
//         {people.length === 0 ? (
//           <div className="text-center py-8">
//             <p className="text-lg font-medium text-gray-500">No pending users available.</p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-lg">
//               <thead>
//                 <tr className={darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"}>
//                   {["Name", "Role", "Email", "Proofs", "Actions"].map((heading, index) => (
//                     <th key={index} className="px-6 py-4 text-left font-semibold uppercase tracking-wide">
//                       {heading}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {people.map((person) => (
//                   <tr key={person.userId} className={darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"}>
//                     <td className="px-6 py-5 font-semibold">{person.fullName}</td>
//                     <td className="px-6 py-5">{person.role}</td>
//                     <td className="px-6 py-5">{person.email}</td>
//                     <td className="px-6 py-5 flex gap-3">
//                       {person.proofs && person.proofs.length > 0 ? (
//                         person.proofs.map((proof, idx) => (
//                           <a
//                             key={idx}
//                             href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${proof.documentPath}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${proof.documentPath}`} alt="Proof" className="h-16 w-16 rounded-lg shadow" />
//                           </a>
//                         ))
//                       ) : (
//                         <p>No Proofs</p>
//                       )}
//                     </td>
//                     <td className="px-6 py-5 text-right flex gap-4">
//                       <button
//                         onClick={() => handleStatusChange(person.userId, "Accepted")}
//                         className="text-green-600 hover:text-green-400 font-semibold text-lg transition"
//                       >
//                         Accept
//                       </button>
//                       <button
//                         onClick={() => handleStatusChange(person.userId, "Rejected")}
//                         className="text-red-600 hover:text-red-400 font-semibold text-lg transition"
//                       >
//                         Reject
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PendingStatusUsersTable;

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../../context/ThemeContext";

const PendingStatusUsersTable = ({ data}) => {
  const [people, setPeople] = useState([]);
  const {darkMode,setDarkMode} = useTheme();

  useEffect(() => {
    setPeople(data);
  }, [data]);

  const handleStatusChange = async (guid, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      const endpoint =
        newStatus === "Accepted"
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/approve-user/${guid}`
          : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/reject-user/${guid}`;

      const response = await axios.post(endpoint, null, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.isSuccess) {
        setPeople((prev) => prev.filter((person) => person.userId !== guid));
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
    <div className={`px-8 py-6 shadow-lg rounded-xl ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold">Pending Users</h1>
        <p className="mt-2 text-lg text-gray-500">Manage pending user approvals and rejections.</p>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">
        {people.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg font-medium text-gray-500">No pending users available.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-lg">
              <thead>
                <tr className={darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"}>
                  {["Name", "Role", "Email", "Proofs", "Actions"].map((heading, index) => (
                    <th key={index} className="px-6 py-4 text-left font-semibold uppercase tracking-wide">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {people.map((person) => (
                  <tr key={person.userId} className={darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"}>
                    <td className="px-6 py-5 font-semibold">{person.fullName}</td>
                    <td className="px-6 py-5">{person.role}</td>
                    <td className="px-6 py-5">{person.email}</td>
                    
                    {/* Proof Images */}
                    <td className="px-6 py-5">
                      {person.proofs && person.proofs.length > 0 ? (
                        <div className="grid grid-cols-3 gap-2">
                          {person.proofs.map((proof, idx) => (
                            <a
                              key={idx}
                              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${proof.documentPath}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-16 h-16 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-125"
                            >
                              <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${proof.documentPath}`}
                                alt="Proof"
                                className="object-cover w-full h-full"
                              />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">No Proofs</p>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5 text-right">
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleStatusChange(person.userId, "Accepted")}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleStatusChange(person.userId, "Rejected")}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
                        >
                          Reject
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingStatusUsersTable;

