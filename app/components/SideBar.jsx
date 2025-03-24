// // import { useRouter } from "next/router";

// import Link from "next/link";

// export default function Sidebar() {
//   //   const router = useRouter();

//   //   const handleNavigation = (route) => {
//   //     router.push(route);
//   //   };
//   const handleLogOut=()=>{
//     localStorage.removeItem('token');
//   }
//   return (
//     <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0">
//       <Link href={"/"}>
//         <div className="p-4 text-lg font-bold border-b border-gray-700">
//           Ideal Trip
//         </div>
//       </Link>
//       <div className="mt-6 flex flex-col justify-between ">
//         <div>
//           <Link href={"/"}>
//             <button
//               //   onClick={() => handleNavigation("/admin/dashboard?view=tourists")}
//               className="w-full flex items-center p-4 text-left hover:bg-gray-700"
//             >
//               <span className="material-icons mr-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
//                   />
//                 </svg>
//               </span>
//               All Users
//             </button>
//           </Link>
//           <Link href={"/pending-users"}>
//             <button
//               //   onClick={() => handleNavigation("/admin/dashboard?view=users")}
//               className="w-full flex items-center p-4 text-left hover:bg-gray-700"
//             >
//               <span className="material-icons mr-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//                   />
//                 </svg>
//               </span>
//               Pending Users
//             </button>
//           </Link>
//         </div>
//         <div>
//           <Link href={"/profile"}>
//             <button
//               //   onClick={() => handleNavigation("/admin/dashboard?view=users")}
//               className="w-full flex items-center p-4 text-left hover:bg-gray-700"
//             >
//               <span className="material-icons mr-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                   />
//                 </svg>
//               </span>
//               Profile
//             </button>
//           </Link>
//           <Link href={"/login"} onClick={handleLogOut}>
//             <button
//               //   onClick={() => handleNavigation("/admin/dashboard?view=users")}
//               className="w-full flex items-center p-4 text-left hover:bg-gray-700"
//             >
//               <span className="material-icons mr-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
//                   />
//                 </svg>
//               </span>
//               LogOut
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Link from "next/link";

// export default function Sidebar() {
//   const handleLogOut = () => {
//     localStorage.removeItem("token");
//   };

//   return (
//     <div className="w-80 h-screen bg-gray-900 text-white fixed top-0 left-0 shadow-lg flex flex-col">
//       {/* Brand Logo */}
//       <Link href={"/"}>
//         <div className="p-6 text-2xl font-bold text-center border-b border-gray-700 tracking-wide">
//           Ideal Trip
//         </div>
//       </Link>
      
//       {/* Navigation Menu */}
//       <nav className="flex-1 mt-6 space-y-6 px-4">
//         <SidebarItem href="/" icon="home" label="Dashboard" />
//         <SidebarItem href="/pending-users" icon="users" label="Pending Users" />
//         <SidebarItem href="/profile" icon="user" label="Profile" />
//       </nav>
      
//       {/* Logout Button */}
//       <div className="mt-auto mb-6 px-4 border-t border-gray-700 pt-6">
//         <Link href="/login" onClick={handleLogOut}>
//           <button className="w-full flex items-center px-4 py-3 text-left rounded-lg bg-red-600 hover:bg-red-700 transition duration-200 font-semibold">
//             <span className="mr-3">
//               <LogoutIcon />
//             </span>
//             Logout
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Sidebar Item Component
// const SidebarItem = ({ href, icon, label }) => (
//   <Link href={href}>
//     <button className="w-full flex items-center px-4 py-4 text-left hover:bg-gray-700 transition duration-200 font-semibold border-b border-gray-700">
//       <span className="mr-3">
//         <SidebarIcon type={icon} />
//       </span>
//       {label}
//     </button>
//   </Link>
// );

// // Sidebar Icons
// const SidebarIcon = ({ type }) => {
//   const icons = {
//     home: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9m0 0l9 9m-9-9v18" />
//       </svg>
//     ),
//     users: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.12a7.5 7.5 0 0 1 15 0A17.93 17.93 0 0 1 12 21.75c-2.68 0-5.22-.58-7.5-1.63Z" />
//       </svg>
//     ),
//     user: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Zm6 6a6 6 0 0 0-12 0" />
//       </svg>
//     ),
//   };
//   return icons[type] || null;
// };

// // Logout Icon
// const LogoutIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H21" />
//   </svg>
// );



// import Link from "next/link";
// import { FaSun,FaMoon } from "react-icons/fa";

// export default function Sidebar({ darkMode , setDarkMode}) {
//   const handleLogOut = () => {
//     localStorage.removeItem("token");
//   };

//   return (
//     <div
//       className={`w-80 h-screen fixed top-0 left-0 shadow-lg flex flex-col transition-colors duration-300 
//         ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
//     >
//       {/* Brand Logo */}
//       <Link href="/">
//         <div
//           className={`p-6 text-2xl font-bold text-center border-b tracking-wide transition-colors duration-300 
//             ${darkMode ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"}`}
//         >
//           Ideal Trip
//         </div>
//       </Link>

//       {/* Navigation Menu */}
//       <nav className="flex-1 mt-6 space-y-2 px-4">
//         <SidebarItem href="/" icon="home" label="Dashboard" darkMode={darkMode} />
//         <SidebarItem href="/pending-users" icon="users" label="Pending Users" darkMode={darkMode} />
//         <SidebarItem href="/profile" icon="user" label="Profile" darkMode={darkMode} />
//       </nav>

//      {/* Mode Switch Button */}
//      <div className="mt-auto px-4 pb-4 flex items-center">
//         <span className="mr-3 text-sm font-medium">{darkMode ? "Dark Mode" : "Light Mode"}</span>
//         <button
//           className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 ${
//             darkMode ? "bg-indigo-600" : "bg-gray-300"
//           }`}
//           onClick={() => setDarkMode(!darkMode)}
//         >
//           <div
//             className={`absolute w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
//               darkMode ? "translate-x-6" : "translate-x-0"
//             }`}
//           >
//             {darkMode ? (
//               <FaMoon className="w-full h-full p-1 text-yellow-400" />
//             ) : (
//               <FaSun className="w-full h-full p-1 text-gray-800" />
//             )}
//           </div>
//         </button>
//       </div>

//       {/* Logout Button */}
//       <div className="px-4 pb-6">
//         <Link href="/login" onClick={handleLogOut}>
//           <button className="w-full flex items-center px-4 py-3 text-left rounded-lg bg-red-600 hover:bg-red-700 transition duration-200 font-semibold">
//             <span className="mr-3">
//               <LogoutIcon />
//             </span>
//             Logout
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// // Sidebar Item Component
// const SidebarItem = ({ href, icon, label, darkMode }) => (
//   <Link href={href}>
//     <button
//       className={`w-full flex items-center px-4 py-4 text-left rounded-lg transition duration-200 font-medium
//         ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-200"}`}
//     >
//       <span className="mr-3">
//         <SidebarIcon type={icon} />
//       </span>
//       {label}
//     </button>
//   </Link>
// );

// // Sidebar Icons
// const SidebarIcon = ({ type }) => {
//   const icons = {
//     home: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9m0 0l9 9m-9-9v18" />
//       </svg>
//     ),
//     users: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.12a7.5 7.5 0 0 1 15 0A17.93 17.93 0 0 1 12 21.75c-2.68 0-5.22-.58-7.5-1.63Z" />
//       </svg>
//     ),
//     user: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Zm6 6a6 6 0 0 0-12 0" />
//       </svg>
//     ),
//   };
//   return icons[type] || null;
// };

// // Dark Mode Icon
// const DarkModeIcon = ({ darkMode }) => (
//   darkMode ? (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-11h-1M4.34 12h-1m15.64 7.07-.71-.71M6.71 6.71l-.71-.71m12.02 12.02-.71.71M6.71 17.29l-.71.71M12 5a7 7 0 1 1-7 7" />
//     </svg>
//   ) : (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 12.75a9 9 0 1 1-9-9 5.25 5.25 0 0 0 9 9Z" />
//     </svg>
//   )
// );

// // Logout Icon
// const LogoutIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H21" />
//   </svg>
// );







// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// export default function Sidebar({ setDarkMode }) {
//   const [darkMode, setDarkMode] = useState(false);

//   // Load dark mode preference from localStorage (if available)
//   useEffect(() => {
//     const storedMode = localStorage.getItem("darkMode") === "true";
//     setDarkMode(storedMode);
//     setDarkMode(storedMode);
//   }, []);

//   // Function to toggle dark mode
//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     setDarkMode(newMode);
//     localStorage.setItem("darkMode", newMode); // Save preference
//   };

//   return (
//     <div className={`w-80 h-screen fixed top-0 left-0 shadow-lg flex flex-col transition-colors duration-300 
//       ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>

//       {/* Brand Logo */}
//       <Link href="/">
//         <div className={`p-6 text-2xl font-bold text-center border-b tracking-wide transition-colors duration-300 
//           ${darkMode ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"}`}>
//           Ideal Trip
//         </div>
//       </Link>

//       {/* Navigation */}
//       <nav className="flex-1 mt-6 space-y-2 px-4">
//         <SidebarItem href="/" icon="home" label="Dashboard" darkMode={darkMode} />
//         <SidebarItem href="/pending-users" icon="users" label="Pending Users" darkMode={darkMode} />
//         <SidebarItem href="/profile" icon="user" label="Profile" darkMode={darkMode} />
//       </nav>

//       {/* Mode Switch Button */}
//       <div className="mt-auto px-4 pb-4 flex items-center">
//         <span className="mr-3 text-sm font-medium">{darkMode ? "Dark Mode" : "Light Mode"}</span>
//         <button
//           className={`relative w-14 h-8 rounded-full p-1 transition-colors duration-300 ${darkMode ? "bg-indigo-600" : "bg-gray-300"}`}
//           onClick={toggleDarkMode}
//         >
//           <div className={`absolute w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 
//             ${darkMode ? "translate-x-6" : "translate-x-0"}`}>
//             {darkMode ? <FaMoon className="w-full h-full p-1 text-yellow-400" /> : <FaSun className="w-full h-full p-1 text-gray-800" />}
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// }

// // Sidebar Item Component
// const SidebarItem = ({ href, icon, label, darkMode }) => (
//   <Link href={href}>
//     <button className={`w-full flex items-center px-4 py-4 text-left rounded-lg transition duration-200 font-medium 
//       ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-200"}`}>
//       <span className="mr-3"><SidebarIcon type={icon} /></span>
//       {label}
//     </button>
//   </Link>
// );

// // Sidebar Icons
// const SidebarIcon = ({ type }) => {
//   const icons = {
//     home: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9m0 0l9 9m-9-9v18" />
//       </svg>
//     ),
//     users: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.12a7.5 7.5 0 0 1 15 0A17.93 17.93 0 0 1 12 21.75c-2.68 0-5.22-.58-7.5-1.63Z" />
//       </svg>
//     ),
//   };
//   return icons[type] || null;
// };



import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Sidebar() {
  const { darkMode, setDarkMode } = useTheme();
  const handleLogOut = () => {
         localStorage.removeItem("token");
       };

  // Load dark mode preference from localStorage (if available)
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedMode);
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode); // Save preference
  };

  return (
    <div
      className={`w-80 h-screen fixed top-0 left-0 shadow-lg flex flex-col 
      ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Brand Logo */}
      <Link href="/">
        <div
          className={`p-6 text-3xl font-bold text-center border-b tracking-wide transition-all duration-300 
          ${darkMode ? "border-gray-700 text-white" : "border-gray-300 text-gray-900"}`}
        >
          Ideal Trip
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 mt-8 space-y-4 px-6 ">
        <SidebarItem href="/" icon="home" label="Dashboard" darkMode={darkMode} />
        <SidebarItem href="/pending-users" icon="users" label="Pending Users" darkMode={darkMode} />
        <SidebarItem href="/profile" icon="user" label="Profile" darkMode={darkMode} />
      </nav>

      {/* Dark Mode Toggle */}
      <div className="mt-auto px-6 pb-6 flex items-center justify-between">
        <span className="text-lg font-medium">{darkMode ? "Dark Mode" : "Light Mode"}</span>
        <button
          className={`relative w-14 h-8 rounded-full transition-colors duration-300 
          ${darkMode ? "bg-indigo-600" : "bg-gray-300"}`}
          onClick={toggleDarkMode}
        >
          <div
            className={`absolute w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 
            ${darkMode ? "translate-x-6" : "translate-x-0"}`}
          >
            {darkMode ? <FaMoon className="w-full h-full p-1 text-yellow-400" /> : <FaSun className="w-full h-full p-1 text-gray-800" />}
          </div>
        </button>
      </div>
      {/* Logout Button */}
     <div className="px-4 pb-6">
         <Link href="/login" onClick={handleLogOut}>
           <button className="w-full flex items-center px-4 py-3 text-left rounded-lg bg-red-600 hover:bg-red-700 transition duration-200 font-semibold">
             <span className="mr-3">
               <LogoutIcon />
             </span>
             Logout
           </button>
         </Link>
       </div>
    </div>
  );
}

// Sidebar Item Component
const SidebarItem = ({ href, icon, label, darkMode }) => (
  <Link href={href}>
    <button
      className={`w-full flex items-center px-5 py-4 text-left rounded-lg text-2xl transition-all duration-200 font-bold 
      ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-200"}`}
    >
      <span className="mr-4"><SidebarIcon type={icon} /></span>
      {label}
    </button>
  </Link>
);

// Sidebar Icons
const SidebarIcon = ({ type }) => {
  const icons = {
    home: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9m0 0l9 9m-9-9v18" />
      </svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.12a7.5 7.5 0 0 1 15 0A17.93 17.93 0 0 1 12 21.75c-2.68 0-5.22-.58-7.5-1.63Z" />
      </svg>
    ),
    user: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c3.333 0 6-2.667 6-6S15.333 2 12 2 6 4.667 6 8s2.667 6 6 6Zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4Z" />
      </svg>
    ),
  };
  return icons[type] || null;
};

// Logout Icon
const LogoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H21" />
  </svg>
);

