// "use client";
// import { useState, useEffect } from "react";
// import Sidebar from "./SideBar";
// import axios from "axios";
// import { useRouter } from "next/router";

// export default function Dashboard() {
//   const [tourists, setTourists] = useState([]);
//   const [otherUsers, setOtherUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();
//   const { view } = router.query;

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get("http://localhost:5000/api/users"); // Replace with your API
//         const users = response.data;
//         // Categorize users into tourists and others
//         setTourists(users.filter((user) => user.role === "tourist")); // Assuming role exists
//         setOtherUsers(users.filter((user) => user.role !== "tourist"));
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleDelete = async (userId) => {
//     if (confirm("Are you sure you want to delete this user?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/users/${userId}`); // Replace with your API
//         setTourists(tourists.filter((user) => user.id !== userId));
//         setOtherUsers(otherUsers.filter((user) => user.id !== userId));
//         alert("User deleted successfully.");
//       } catch (error) {
//         console.error("Error deleting user:", error);
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 ml-64 p-6 bg-gray-100">
//         <h1 className="text-2xl text-black font-bold mb-6">Admin Dashboard</h1>

//         {/* {loading ? (
//           <p>Loading users...</p>
//         ) : ( */}
//         <div>
//           {/* Tourists Table */}
//           {/* {(view === "tourists" || !view) && ( */}
//           <div className="mb-8 text-black">
//             <h2 className="text-lg font-semibold text-black mb-4">
//               All Tourists
//             </h2>
//             <div className="overflow-x-auto bg-white shadow rounded-lg">
//               <table className="w-full border-collapse">
//                 <thead className="bg-gray-200">
//                   <tr>
//                     <th className="p-4 text-left ">Email</th>
//                     <th className="p-4 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tourists.map((user) => (
//                     <tr key={user.id} className="border-t">
//                       <td className="p-4">{user.name}</td>
//                       <td className="p-4">{user.email}</td>
//                       <td className="p-4 text-center">
//                         <button
//                           onClick={() => handleDelete(user.id)}
//                           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           {/* )} */}

//           {/* Other Users Table */}
//           {/* {(view === "users" || !view) && ( */}
//           <div className="text-black">
//             <h2 className="text-lg font-semibold mb-4">Other Users</h2>
//             <div className="overflow-x-auto bg-white shadow rounded-lg">
//               <table className="w-full border-collapse">
//                 <thead className="bg-gray-200">
//                   <tr>
//                     <th className="p-4 text-left">Name</th>
//                     <th className="p-4 text-left">Email</th>
//                     <th className="p-4 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {otherUsers.map((user) => (
//                     <tr key={user.id} className="border-t">
//                       <td className="p-4">{user.name}</td>
//                       <td className="p-4">{user.email}</td>
//                       <td className="p-4 text-center">
//                         <button
//                           onClick={() => handleDelete(user.id)}
//                           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           {/* )} */}
//         </div>
//         {/* )} */}
//       </div>
//     </div>
//   );
// }
