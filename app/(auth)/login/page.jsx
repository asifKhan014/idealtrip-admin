import Login from "@/app/components/Login";
import React from "react";

function page() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
    <img
        src="/login.jpg"
        alt="Login Background"
        className="hidden md:flex flex-1 h-screen bg-cover bg-center"
        width={500}
        height={500}
      />
      <Login />
    </div>
  );
}

export default page;
