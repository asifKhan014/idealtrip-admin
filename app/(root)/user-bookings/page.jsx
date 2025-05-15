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
        // Send request with cookies automatically included
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/administration/pending-users`,
          {
            withCredentials: true, // Ensures cookies are sent with the request
          }
        );
        
        // Extract pending users data
        const pendingUsersdata = response.data.data || [];
        setPendingUsers(pendingUsersdata);
      } catch (error) {
        console.error("Error fetching users:", error);
  
        // Handle Unauthorized (401) error, which means user is not authenticated
        if (error.response && error.response.status === 401) {
          alert("User is not authenticated. Please log in.");
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
