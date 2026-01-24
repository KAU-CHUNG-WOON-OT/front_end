import { useState, type ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-dvh flex-col bg-[#f0f8ff]">
      
      <Header onOpenSidebar={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div className="relative flex flex-1 flex-col overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[60%] top-[5%] w-[60vw] aspect-square rounded-full bg-[#87CEEB] opacity-60 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-10%] top-[55%] w-[60vw] aspect-square rounded-full bg-[#FFD1DC] opacity-60 blur-3xl"
        />
        
        <div className="relative z-10 flex h-full flex-1 flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;