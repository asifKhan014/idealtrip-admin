// import { useRouter } from "next/router";

import Link from "next/link";

export default function Sidebar() {
  //   const router = useRouter();

  //   const handleNavigation = (route) => {
  //     router.push(route);
  //   };
  const handleLogOut=()=>{
    localStorage.removeItem('token');
  }
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0">
      <Link href={"/"}>
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          Ideal Trip
        </div>
      </Link>
      <div className="mt-6 flex flex-col justify-between ">
        <div>
          <Link href={"/"}>
            <button
              //   onClick={() => handleNavigation("/admin/dashboard?view=tourists")}
              className="w-full flex items-center p-4 text-left hover:bg-gray-700"
            >
              <span className="material-icons mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </span>
              All Users
            </button>
          </Link>
          <Link href={"/pending-users"}>
            <button
              //   onClick={() => handleNavigation("/admin/dashboard?view=users")}
              className="w-full flex items-center p-4 text-left hover:bg-gray-700"
            >
              <span className="material-icons mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </span>
              Pending Users
            </button>
          </Link>
        </div>
        <div>
          <Link href={"/profile"}>
            <button
              //   onClick={() => handleNavigation("/admin/dashboard?view=users")}
              className="w-full flex items-center p-4 text-left hover:bg-gray-700"
            >
              <span className="material-icons mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
              Profile
            </button>
          </Link>
          <Link href={"/login"} onClick={handleLogOut}>
            <button
              //   onClick={() => handleNavigation("/admin/dashboard?view=users")}
              className="w-full flex items-center p-4 text-left hover:bg-gray-700"
            >
              <span className="material-icons mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
              </span>
              LogOut
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
