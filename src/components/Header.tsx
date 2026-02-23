import { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo_black.svg";

interface HeaderProps {
  onOpenSidebar: () => void;
}

const Header = ({ onOpenSidebar }: HeaderProps) => {
  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const scrollableElements = document.getElementsByClassName("overflow-y-auto");
    for (let i = 0; i < scrollableElements.length; i++) {
      scrollableElements[i].scrollTop = 0;
    }
  }, [location.pathname]);

  const getPageTitle = (path: string) => {
    if (path === "/notice") return "공지사항";
    if (path === "/timetable") return "타임테이블";
    if (path.startsWith("/club")) return "동아리 정보";
    if (path.startsWith("/resort")) return "리조트 정보";
    if (path.startsWith("/emergency")) return "긴급연락망";
    if (path === "/makers") return "만든이";
    return "";
  };

  const currentTitle = getPageTitle(location.pathname);

  return (
    <header className="sticky top-0 flex justify-between items-center p-6 z-50 bg-transparent">
      
      <button 
        onClick={onOpenSidebar} 
        className="flex items-center justify-center p-0 bg-transparent border-none cursor-pointer z-10"
      >
        <FiMenu size={24} className="text-black" />
      </button>

      <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-gray-900">
        {currentTitle}
      </h1>

      <Link to="/" aria-label="홈으로 이동" className="z-10">
        <img
          src={logoImg}
          alt="청춘 로고"
          className="h-6 w-auto cursor-pointer brightness-0"
        />
      </Link>
    </header>
  );
};

export default Header;