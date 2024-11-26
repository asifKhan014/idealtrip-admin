import Sidebar from "../components/SideBar";

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64  p-6 bg-gray-100">{children}</div>
    </div>
  );
}
