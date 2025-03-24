// original

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Sidebar from "../components/SideBar";

// export default function RootLayout({ children }) {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex-1 ml-64 pr-0 pl-16 py-0 bg-blue-950">{children}</div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import React from "react";
// import Sidebar from "../components/SideBar";

// export default function RootLayout({ children }) {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={`flex min-h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
//       <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
//       <div className={`flex-1 ml-64 pr-0 pl-16 py-0 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
//         {React.cloneElement(children, { darkMode, setDarkMode })}
//       </div>
//     </div>
//   );
// }



// "use client";

// import { ThemeProvider } from "@/context/ThemeContext";
// import React from "react";
// import Sidebar from "../components/SideBar";

// export default function RootLayout({ children }) {
//   return (
//     <ThemeProvider>
//     <div className={`flex min-h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
//       <Sidebar setDarkMode={setDarkMode} /> {/* Sidebar updates dark mode */}
//       <div className={`flex-1 ml-64 pr-0 pl-16 py-0 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
//         {React.Children.map(children, (child) =>
//           React.isValidElement(child)
//             ? React.cloneElement(child, { darkMode }) // Check if the element is valid
//             : child
//         )}
//       </div>
//     </div>
//     </ThemeProvider>
//   );
// }

"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";
import Sidebar from "../components/SideBar";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
    <div className={`flex min-h-screen`}>
      <Sidebar/> {/* Sidebar updates dark mode */}
      <div className="flex-1 ml-64 pr-0 pl-16 py-0">
        {children}
      </div>
    </div>
    </ThemeProvider>
  );
}



