import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar with independent scroll */}
      <div className="w-64 h-screen overflow-y-auto">
        <Sidebar />
      </div>
      
      {/* Main content with independent scroll */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
}
