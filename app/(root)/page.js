"use client";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useRouter } from "next/router";
import TouristTable from "../components/TouristsTable";
import OtherUserTable from "../components/OtherUserTable";
import UsersDetailCard from "../components/StatisticCard";

export default function Home() {
  const [tourists, setTourists] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // const router = useRouter();
  // const { view } = router.query;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/users"); // Replace with your API
        const users = response.data;
        // Categorize users into tourists and others
        setTourists(users.filter((user) => user.role === "tourist")); // Assuming role exists
        setOtherUsers(users.filter((user) => user.role !== "tourist"));
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/api/users/${userId}`); // Replace with your API
        setTourists(tourists.filter((user) => user.id !== userId));
        setOtherUsers(otherUsers.filter((user) => user.id !== userId));
        alert("User deleted successfully.");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user.");
      }
    }
  };

  return (
    <>
      <div className="flex-1 ">
        <div className=" text-black">Navbar here</div>
        <h1 className="text-2xl text-black font-bold mb-6"> Dashboard</h1>
        <div className="">
          <UsersDetailCard />
        </div>

        <div className="py-6">
          <div className="mb-8 text-black py-4">
            <h2 className="text-lg font-semibold text-black mb-4">
              All Tourists
            </h2>

            <TouristTable />
          </div>

          {/* Other Users Table */}

          <div className="text-black">
            <h2 className="text-lg font-semibold mb-4">Other Users</h2>

            <OtherUserTable />
          </div>
        </div>
      </div>
    </>
  );
}
