'use client'
import React, { useState,useEffect } from "react";
import PendingStatusUsersTable from "../../components/PendingStatusUsersTable";
import axios from "axios";
function page() {
  const [loading, setLoading] = useState(false);
  const [pendingUsers,setPendingUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("User is not authenticated. Please log in.");
          router.push("/login");
        }

        const pendingUsersResult = await axios.get("https://localhost:7216/api/administration/pending-users",{
          headers: {
            Authorization: `Bearer ${token}`, // Make sure the token is passed correctly
          },
        })
        const pendingUsersdata = pendingUsersResult.data.data? pendingUsersResult.data.data:[]
        setPendingUsers(pendingUsersdata);
      } catch (error) {
        console.error("Error fetching users:", error);
        alert("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };    
    fetchUsers();
  }, []);
  return (
    <div>
      <PendingStatusUsersTable data={pendingUsers}/>
    </div>
  );
}

export default page;
