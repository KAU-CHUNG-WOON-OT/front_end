import { useState, type ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

// Layout이 감쌀 내용물(페이지)의 타입 정의
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#f0f8ff]">
      {/* 헤더와 사이드바는 여기서 고정적으로 보여줍니다 */}
      <Header onOpenSidebar={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* 페이지마다 바뀌는 내용은 children 자리에 들어갑니다 */}
      <div className="relative flex-1 flex flex-col overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[60%] top-[5%] w-[60vw] aspect-square rounded-full bg-[#87CEEB] opacity-60 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-10%] top-[55%] w-[60vw] aspect-square rounded-full bg-[#FFD1DC] ospacity-60 blur-3xl"
        />
        <div className="relative z-10 flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default Layout;