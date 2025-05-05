// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import TouristTable from "../components/TouristsTable";
// import UsersDetailCard from "../components/StatisticCard";
// import { useRouter } from "next/navigation";
// import PendingStatusUsersTable from "../components/PendingStatusUsersTable";
// import OtherUsers from "../components/OtherUsers";

// export default function Home() {
//   const [tourists, setTourists] = useState([]);
//   const [otherUsers, setOtherUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           router.push("/login");
//         }

//         const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/get-users`, {
//           headers: {
//             Authorization: `Bearer ${token}`, // Make sure the token is passed correctly
//           },
//         });
//         const data = response.data.data ? response.data.data : [];
//         const tourists = data.filter(user => user.role === "Tourist");
//         const otherUsers = data.filter(user => user.role !== "Tourist");
//         setTourists(tourists);
//         setOtherUsers(otherUsers);
//       } catch (error) {
//         if(error.status == 401){
//           router.push("/login")
//         }
//         console.error("Error fetching users:", error);
//         // alert("Failed to fetch user data.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleDelete = async (userId) => {
//     if (confirm("Are you sure you want to delete this user?")) {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           alert("User is not authenticated. Please log in.");
//           return;
//         }

//         console.log("Token:", token);
//         console.log("User ID to delete:", userId);

//         const result = await axios.delete(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/delete-user/${userId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         console.log("Delete response:", result);

//         if (result.data.isSuccess) {
//           setTourists((prev) => prev.filter((user) => user.userId !== userId));
//           setOtherUsers((prev) => prev.filter((user) => user.userId !== userId));
//           alert("User deleted successfully.");
//         } else {
//           alert("Failed to delete user.");
//         }
//       } catch (error) {
//         console.error("Error deleting user:", error.response || error.message);
//         alert("Failed to delete user.");
//       }
//     }
//   };


//   return (
//     <>
//       <div className="flex-1">
//         <h1 className="text-2xl text-black font-bold mb-6">Dashboard</h1>
//         <div>
//           <UsersDetailCard />
//         </div>

//         <div className="py-6">
//           <div className="mb-8 text-black py-4">
//             <h2 className="text-lg font-semibold text-black mb-4">
//               All Tourists
//             </h2>
//             <TouristTable data={tourists} onDelete={handleDelete} />
//           </div>

//           <div className="text-black">
//             <h2 className="text-lg font-semibold mb-4">Other Users</h2>
//             <OtherUsers data={otherUsers} onDelete={handleDelete} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import TouristTable from "../components/TouristsTable";
// import UsersDetailCard from "../components/StatisticCard";
// import { useRouter } from "next/navigation";
// import OtherUsers from "../components/OtherUsers";
// import { Bell } from "lucide-react"; // Bell icon from lucide-react
// import { HubConnectionBuilder } from "@microsoft/signalr";

// export default function Home() {
//   const [tourists, setTourists] = useState([]);
//   const [otherUsers, setOtherUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [newNotificationCount, setNewNotificationCount] = useState(0);
//   const [showNotifications, setShowNotifications] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) router.push("/login");

//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/get-users`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         const data = response.data.data || [];
//         setTourists(data.filter((user) => user.role === "Tourist"));
//         setOtherUsers(data.filter((user) => user.role !== "Tourist"));
//       } catch (error) {
//         if (error.status === 401) router.push("/login");
//         console.error("Error fetching users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchNotifications = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/notifications`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setNotifications(response.data || []);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//       }
//     };

//     fetchUsers();
//     fetchNotifications();

//     // 🚀 SignalR Real-time Connection
//     const connection = new HubConnectionBuilder()
//       .withUrl(`${process.env.NEXT_PUBLIC_BACKEND_URL}/notificationHub`)
//       .withAutomaticReconnect()
//       .build();

//     connection
//       .start()
//       .then(() => console.log("SignalR Connected ✅"))
//       .catch((err) => console.error("SignalR Connection Error:", err));

//     connection.on("ReceiveNotification", (message) => {
//       setNotifications((prev) => [{ message, createdAt: new Date() }, ...prev]);
//       setNewNotificationCount((prev) => prev + 1); // 🔔 Increment count
//     });

//     return () => connection.stop();
//   }, []);

//   const handleDelete = async (userId) => {
//     if (confirm("Are you sure you want to delete this user?")) {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return alert("User is not authenticated.");
//         const result = await axios.delete(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/delete-user/${userId}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         if (result.data.isSuccess) {
//           setTourists((prev) => prev.filter((user) => user.userId !== userId));
//           setOtherUsers((prev) => prev.filter((user) => user.userId !== userId));
//           alert("User deleted successfully.");
//         } else {
//           alert("Failed to delete user.");
//         }
//       } catch (error) {
//         console.error("Error deleting user:", error);
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   const handleBellClick = () => {
//     setShowNotifications(!showNotifications);
//     setNewNotificationCount(0); // ✅ Reset new notification count
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl text-black font-bold">Dashboard</h1>
//         <div className="relative">
//           <button onClick={handleBellClick} className="relative">
//             <Bell className="w-8 h-8 text-gray-700" />
//             {newNotificationCount > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {newNotificationCount}
//               </span>
//             )}
//           </button>
//           {showNotifications && (
//             <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
//               <h3 className="font-semibold text-lg mb-2">🔔 Notifications</h3>
//               {notifications.length > 0 ? (
//                 <ul>
//                   {notifications.map((notif, index) => (
//                     <li key={index} className="border-b py-2 text-sm">
//                       {notif.message}
//                       <p className="text-xs text-gray-500">
//                         {new Date(notif.createdAt).toLocaleString()}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500">No notifications.</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       <UsersDetailCard />

//       <div className="py-6">
//         <div className="mb-8">
//           <h2 className="text-lg font-semibold mb-4">All Tourists</h2>
//           <TouristTable data={tourists} onDelete={handleDelete} />
//         </div>

//         <div>
//           <h2 className="text-lg font-semibold mb-4">Other Users</h2>
//           <OtherUsers data={otherUsers} onDelete={handleDelete} />
//         </div>
//       </div>
//     </>
//   );
// }


//This was the applied version 



// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import TouristTable from "../components/TouristsTable";
// import UsersDetailCard from "../components/StatisticCard";
// import { useRouter } from "next/navigation";
// import OtherUsers from "../components/OtherUsers";
// import { FaBell } from "react-icons/fa";  // Importing bell icon from react-icons
// import { startSignalRConnection, stopSignalRConnection } from "../../utils/signalRService";

// export default function Home() {
//   const [tourists, setTourists] = useState([]);
//   const [otherUsers, setOtherUsers] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) router.push("/login");
  
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/get-users`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         const data = response.data.data || [];
//         setTourists(data.filter((user) => user.role === "Tourist"));
//         setOtherUsers(data.filter((user) => user.role !== "Tourist"));
//       } catch (error) {
//         if (error.status === 401) router.push("/login");
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
//         const token = localStorage.getItem("token");
//         const result = await axios.delete(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/delete-user/${userId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (result.data.isSuccess) {
//           setTourists((prev) => prev.filter((user) => user.userId !== userId));
//           setOtherUsers((prev) => prev.filter((user) => user.userId !== userId));
//           alert("User deleted successfully.");
//         } else alert("Failed to delete user.");
//       } catch (error) {
//         console.error("Error deleting user:", error);
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl text-black font-bold">Dashboard</h1>
//         <div className="relative cursor-pointer">
//           <FaBell size={32} /> {/* Bell icon from react-icons */}
//           {notifications.length > 0 && (
//             <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
//               {notifications.length}
//             </span>
//           )}
//         </div>
//       </div>

//       <div>
//         <UsersDetailCard />
//       </div>

//       <div className="py-6">
//         <div className="mb-8 text-black py-4">
//           <h2 className="text-lg font-semibold mb-4">All Tourists</h2>
//           <TouristTable data={tourists} onDelete={handleDelete} />
//         </div>

//         <div className="text-black">
//           <h2 className="text-lg font-semibold mb-4">Other Users</h2>
//           <OtherUsers data={otherUsers} onDelete={handleDelete} />
//         </div>
//       </div>
//     </>
//   );
// }


// chat gpt last response

// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import TouristTable from "../components/TouristsTable";
// import UsersDetailCard from "../components/StatisticCard";
// import { useRouter } from "next/navigation";
// import OtherUsers from "../components/OtherUsers";
// import { FaBell, FaSun, FaMoon } from "react-icons/fa";
// import { startSignalRConnection, stopSignalRConnection } from "../../utils/signalRService";

// export default function Home() {
//   const [tourists, setTourists] = useState([]);
//   const [otherUsers, setOtherUsers] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) router.push("/login");
  
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/get-users`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         const data = response.data.data || [];
//         setTourists(data.filter((user) => user.role === "Tourist"));
//         setOtherUsers(data.filter((user) => user.role !== "Tourist"));
//       } catch (error) {
//         if (error.status === 401) router.push("/login");
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
//         const token = localStorage.getItem("token");
//         const result = await axios.delete(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/delete-user/${userId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (result.data.isSuccess) {
//           setTourists((prev) => prev.filter((user) => user.userId !== userId));
//           setOtherUsers((prev) => prev.filter((user) => user.userId !== userId));
//           alert("User deleted successfully.");
//         } else alert("Failed to delete user.");
//       } catch (error) {
//         console.error("Error deleting user:", error);
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   return (
//     <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-6" : "bg-white text-black min-h-screen p-6"}>
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <button
//             className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
//             onClick={() => setDarkMode(!darkMode)}
//           >
//             {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//           </button>
//           <div className="relative cursor-pointer">
//             <FaBell size={32} />
//             {notifications.length > 0 && (
//               <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
//                 {notifications.length}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       <UsersDetailCard />

//       <div className="py-6">
//         <div className="mb-8 py-4">
//           <h2 className="text-lg font-semibold mb-4">All Tourists</h2>
//           <TouristTable data={tourists} onDelete={handleDelete} />
//         </div>

//         <div>
//           <h2 className="text-lg font-semibold mb-4">Other Users</h2>
//           <OtherUsers data={otherUsers} onDelete={handleDelete} />
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import TouristTable from "../components/TouristsTable";
// import UsersDetailCard from "../components/StatisticCard";
// import { useRouter } from "next/navigation";
// import OtherUsers from "../components/OtherUsers";
// import { FaBell, FaSun, FaMoon } from "react-icons/fa";
// import { startSignalRConnection, stopSignalRConnection } from "../../utils/signalRService";
// import Spinner from "../components/Spinner"; // Assuming you have a Spinner component

// export default function Home() {
//   const [tourists, setTourists] = useState([]);
//   const [otherUsers, setOtherUsers] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) router.push("/login");

//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/get-users`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         const data = response.data.data || [];
//         setTourists(data.filter((user) => user.role === "Tourist"));
//         setOtherUsers(data.filter((user) => user.role !== "Tourist"));
//       } catch (error) {
//         if (error.response?.status === 401) router.push("/login");
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
//         const token = localStorage.getItem("token");
//         const result = await axios.delete(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/delete-user/${userId}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (result.data.isSuccess) {
//           setTourists((prev) => prev.filter((user) => user.userId !== userId));
//           setOtherUsers((prev) => prev.filter((user) => user.userId !== userId));
//           alert("User deleted successfully.");
//         } else alert("Failed to delete user.");
//       } catch (error) {
//         console.error("Error deleting user:", error);
//         alert("Failed to delete user.");
//       }
//     }
//   };

//   return (
//     <div className={darkMode ? "bg-gray-800 text-white min-h-screen p-6 rounded-lg" : "bg-white text-black min-h-screen p-6 rounded-lg"}>
//       <div className="flex justify-between items-center mb-6 ">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           {/* Mode Switch Button */}
//           <button
//             className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 ${
//               darkMode ? "bg-indigo-600" : "bg-gray-300"
//             }`}
//             onClick={() => setDarkMode(!darkMode)}
//           >
//             <div
//               className={`absolute w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
//                 darkMode ? "translate-x-6" : "translate-x-0"
//               }`}
//             >
//               {darkMode ? (
//                 <FaMoon className="w-full h-full p-1 text-yellow-400" />
//               ) : (
//                 <FaSun className="w-full h-full p-1 text-gray-800" />
//               )}
//             </div>
//           </button>
//           <div className="relative cursor-pointer">
//             <FaBell size={32} />
//             {notifications.length > 0 && (
//               <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
//                 {notifications.length}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       <UsersDetailCard  darkMode={darkMode}/>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <Spinner />
//         </div>
//       ) : (
//         <div className="py-6">
//           <div className="mb-8 py-4">
//             <h2 className="text-3xl font-bold mb-4">All Tourists</h2>
//             <TouristTable data={tourists} onDelete={handleDelete} darkMode={darkMode}/>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold mb-4">Other Users</h2>
//             <OtherUsers data={otherUsers} onDelete={handleDelete} darkMode={darkMode}/>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";
import TouristTable from "../components/TouristsTable";
import UsersDetailCard from "../components/StatisticCard";
import { useRouter } from "next/navigation";
import OtherUsers from "../components/OtherUsers";
import { FaBell} from "react-icons/fa";
import { startSignalRConnection, stopSignalRConnection } from "../../utils/signalRService";
import Spinner from "../components/Spinner"; // Assuming you have a Spinner component

export default function Home() {
  const {darkMode,setDarkMode} = useTheme();
  const [tourists, setTourists] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/get-users`,
          {
            withCredentials: true,
          }
        );
  
        const data = response.data.data || [];
        console.log("User fetched");
        console.log(darkMode);
        setTourists(data.filter((user) => user.role === "Tourist"));
        setOtherUsers(data.filter((user) => user.role !== "Tourist"));
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          router.push("/login"); // ⬅️ Redirect on 401
        } else {
          console.error("Error fetching users:", error);
          alert("Failed to fetch users.");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, []);
  
  const handleDelete = async (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        const result = await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/delete-user/${userId}`,
          {
            withCredentials: true,
          }
        );
  
        if (result.data.isSuccess) {
          setTourists((prev) => prev.filter((user) => user.userId !== userId));
          setOtherUsers((prev) => prev.filter((user) => user.userId !== userId));
          alert("User deleted successfully.");
        } else {
          alert(result.data.message || "Failed to delete user.");
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          router.push("/login");
        } else {
          console.error("Error deleting user:", error);
          alert("Failed to delete user.");
        }
      }
    }
  };
  

  return (
    <div className={darkMode ? "bg-gray-800 text-white min-h-screen p-6" : "bg-white text-black min-h-screen p-6"}>
      <div className="flex justify-between items-center mb-6 ">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer">
            <FaBell size={32} />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                {notifications.length}
              </span>
            )}
          </div>
        </div>
      </div>

      <UsersDetailCard darkMode={darkMode} />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spinner />
        </div>
      ) : (
        <div className="py-6">
          <div className="mb-8 py-4">
            <h2 className="text-3xl font-bold mb-4">All Tourists</h2>
            <TouristTable data={tourists} onDelete={handleDelete} darkMode={darkMode} />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Other Users</h2>
            <OtherUsers data={otherUsers} onDelete={handleDelete} darkMode={darkMode} />
          </div>
        </div>
      )}
    </div>
  );
}