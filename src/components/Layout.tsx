import { useState, ReactNode } from "react";
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
    <div className="flex flex-col min-h-screen">
      {/* 헤더와 사이드바는 여기서 고정적으로 보여줍니다 */}
      <Header onOpenSidebar={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* 페이지마다 바뀌는 내용은 children 자리에 들어갑니다 */}
      {children}
    </div>
  );
};

export default Layout;