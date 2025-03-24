// original 

// "use client";
// import { useState ,useEffect} from "react";

// // const peopleData = [
// //   {
// //     name: "Lindsay Walton",
// //     title: "Front-end Developer",
// //     email: "lindsay.walton@example.com",
// //   },
// //   {
// //     name: "John Doe",
// //     title: "Back-end Developer",
// //     email: "john.doe@example.com",
// //   },
// // ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function TouristTable({data,onDelete}) {
//   const [people, setPeople] = useState(data);
//   useEffect(()=>{
//     setPeople(data)
//   },[data]);

//   return (
//     <div className="px-4 sm:px-6 lg:px-8">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the users in your account including their name, title,
//             and email.
//           </p>
//         </div>
//       </div>

//       <div className="mt-8 flow-root">
//         {people.length === 0 ? (
//           <div className="text-center text-gray-500">
//             <p className="text-sm">No users found.</p>
//           </div>
//         ) : (
//           <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle">
//               <table className="min-w-full border-separate border-spacing-0">
//                 <thead>
//                   <tr>
//                     <th
//                       scope="col"
//                       className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
//                     >
//                       Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
//                     >
//                       Title
//                     </th>
//                     <th
//                       scope="col"
//                       className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
//                     >
//                       Email
//                     </th>
//                     <th
//                       scope="col"
//                       className="sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
//                     >
//                       <span className="sr-only">Actions</span>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {people.map((person, personIdx) => (
//                     <tr key={person.email}>
//                       <td
//                         className={classNames(
//                           personIdx !== people.length - 1
//                             ? "border-b border-gray-200"
//                             : "",
//                           "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
//                         )}
//                       >
//                         {person.fullName}
//                       </td>
//                       <td
//                         className={classNames(
//                           personIdx !== people.length - 1
//                             ? "border-b border-gray-200"
//                             : "",
//                           "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
//                         )}
//                       >
//                         {person.role}
//                       </td>
//                       <td
//                         className={classNames(
//                           personIdx !== people.length - 1
//                             ? "border-b border-gray-200"
//                             : "",
//                           "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
//                         )}
//                       >
//                         {person.email}
//                       </td>
//                       <td
//                         className={classNames(
//                           personIdx !== people.length - 1
//                             ? "border-b border-gray-200"
//                             : "",
//                           "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8"
//                         )}
//                       >
//                         <button
//                           onClick={() => onDelete(person.userId)}
//                           className="text-red-600 hover:text-red-900"
//                         >
//                           Delete<span className="sr-only">, {person.name}</span>
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }






// "use client";
// import { useState, useEffect } from "react";
// import Spinner from "../components/Spinner"; // Ensure this component exists

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function TouristTable({ data, onDelete, darkMode }) {
//   const [people, setPeople] = useState(data);

//   useEffect(() => {
//     setPeople(data);
//   }, [data]);

//   return (
//     <div
//       className={`px-8 py-6 shadow-lg rounded-xl ${
//         darkMode ? "bg-gray-900" : "bg-white"
//       }`}
//     >
//       {/* Header Section */}
//       <div className="flex justify-between items-center border-b pb-4 mb-4">
//         <div>
//           <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
//             Tourists List
//           </h1>
//           <p className={`mt-2 text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//             A comprehensive list of all tourists with their details.
//           </p>
//         </div>
//       </div>

//       {/* Table Container */}
//       <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">
//         {people.length === 0 ? (
//           <div className="text-center py-8">
//             <p className={`text-lg font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
//               No tourists found.
//             </p>
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-lg bg-white dark:bg-gray-800 rounded-lg">
//               {/* Table Head */}
//               <thead>
//                 <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
//                   {["Name", "Role", "Email", "Actions"].map((heading, index) => (
//                     <th
//                       key={index}
//                       className="px-6 py-4 text-left font-semibold uppercase tracking-wide"
//                     >
//                       {heading}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               {/* Table Body */}
//               <tbody>
//                 {people.map((person, index) => (
//                   <tr
//                     key={person.userId}
//                     className={`border-b transition ${
//                       darkMode
//                         ? "border-gray-700 hover:bg-gray-700"
//                         : "border-gray-200 hover:bg-gray-100"
//                     }`}
//                   >
//                     <td className="px-6 py-5 font-semibold text-gray-900 dark:text-gray-200">
//                       {person.fullName}
//                     </td>
//                     <td className="px-6 py-5 text-gray-700 dark:text-gray-400">
//                       {person.role}
//                     </td>
//                     <td className="px-6 py-5 text-gray-700 dark:text-gray-400">
//                       {person.email}
//                     </td>
//                     <td className="px-6 py-5 text-right">
//                       <button
//                         onClick={() => onDelete(person.userId)}
//                         className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-semibold text-lg transition"
//                       >
//                         Delete<span className="sr-only">, {person.fullName}</span>
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
// }


"use client";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner"; // Ensure this component exists

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TouristTable({ data, onDelete, darkMode }) {
  const [people, setPeople] = useState(data);

  useEffect(() => {
    setPeople(data);
  }, [data]);

  return (
    <div
      className={`px-8 py-6 shadow-lg rounded-xl ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div>
          <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
            Tourists List
          </h1>
          <p className={`mt-2 text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            A comprehensive list of all tourists with their details.
          </p>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">
        {people.length === 0 ? (
          <div className="text-center py-8">
            <p className={`text-lg font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              No tourists found.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className={`min-w-full text-lg ${
              darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
            }`}>
              {/* Table Head */}
              <thead>
                <tr className={`${
                  darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                }`}>
                  {["Name", "Role", "Email", "Actions"].map((heading, index) => (
                    <th
                      key={index}
                      className="px-6 py-4 text-left font-semibold uppercase tracking-wide"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {people.map((person, index) => (
                  <tr
                    key={person.userId}
                    className={`${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-700"
                        : "border-gray-200 hover:bg-gray-50"
                    } transition-colors duration-200`}
                  >
                    <td className="px-6 py-5 font-semibold">
                      {person.fullName}
                    </td>
                    <td className="px-6 py-5">
                      {person.role}
                    </td>
                    <td className="px-6 py-5">
                      {person.email}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button
                        onClick={() => onDelete(person.userId)}
                        className={`${
                          darkMode
                            ? "text-red-400 hover:text-red-300"
                            : "text-red-600 hover:text-red-800"
                        } font-semibold text-lg transition`}
                      >
                        Delete<span className="sr-only">, {person.fullName}</span>
                      </button>
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
}