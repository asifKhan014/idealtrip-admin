'use client'
import React, { useState,useEffect } from "react";
import PendingStatusUsersTable from "../../components/PendingStatusUsersTable";
import axios from "axios";
import { useTheme } from "../../../context/ThemeContext"
function page() {
  const [loading, setLoading] = useState(false);
  const [pendingUsers,setPendingUsers] = useState([]);
  const {darkMode,setDarkMode} = useTheme();
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const pendingUsersResult = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/pending-users`,
          {
            withCredentials: true, // 🔐 Include cookies
          }
        );
  
        const pendingUsersData = pendingUsersResult.data.data ?? [];
        setPendingUsers(pendingUsersData);
      } catch (error) {
        console.error("Error fetching users:", error);
        if (error.response?.status === 401) {
          alert("Session expired or unauthorized. Please log in.");
          router.push("/login");
        } else {
          alert("Failed to fetch user data.");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, []);
  
  return (
    <div className={`px-8 py-6 shadow-lg h-full ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <PendingStatusUsersTable data={pendingUsers}/>
    </div>
  );
}

export default page;
