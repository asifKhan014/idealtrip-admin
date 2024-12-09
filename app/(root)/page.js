"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import TouristTable from "../components/TouristsTable";
import UsersDetailCard from "../components/StatisticCard";
import { useRouter } from "next/navigation";
import PendingStatusUsersTable from "../components/PendingStatusUsersTable";
import OtherUsers from "../components/OtherUsers";

export default function Home() {
  const [tourists, setTourists] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
        }

        const response = await axios.get("https://localhost:7216/api/administration/get-users", {
          headers: {
            Authorization: `Bearer ${token}`, // Make sure the token is passed correctly
          },
        });
        const data = response.data.data ? response.data.data : [];
        const tourists = data.filter(user => user.role === "Tourist");
        const otherUsers = data.filter(user => user.role !== "Tourist");
        setTourists(tourists);
        setOtherUsers(otherUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
        alert("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("User is not authenticated. Please log in.");
          return;
        }

        console.log("Token:", token);
        console.log("User ID to delete:", userId);

        const result = await axios.delete(
          `https://localhost:7216/api/administration/delete-user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Delete response:", result);

        if (result.data.isSuccess) {
          setTourists((prev) => prev.filter((user) => user.userId !== userId));
          setOtherUsers((prev) => prev.filter((user) => user.userId !== userId));
          alert("User deleted successfully.");
        } else {
          alert("Failed to delete user.");
        }
      } catch (error) {
        console.error("Error deleting user:", error.response || error.message);
        alert("Failed to delete user.");
      }
    }
  };


  return (
    <>
      <div className="flex-1">
        <h1 className="text-2xl text-black font-bold mb-6">Dashboard</h1>
        <div>
          <UsersDetailCard />
        </div>

        <div className="py-6">
          <div className="mb-8 text-black py-4">
            <h2 className="text-lg font-semibold text-black mb-4">
              All Tourists
            </h2>
            <TouristTable data={tourists} onDelete={handleDelete} />
          </div>

          <div className="text-black">
            <h2 className="text-lg font-semibold mb-4">Other Users</h2>
            <OtherUsers data={otherUsers} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
}
