import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import logoImg from "../assets/logo.svg";

interface HeaderProps {
  onOpenSidebar: () => void;
}

const Header = ({ onOpenSidebar }: HeaderProps) => {
  const location = useLocation(); // 현재 위치 정보 가져오기

  // 주소(path)에 따라 보여줄 제목 결정하는 함수
  const getPageTitle = (path: string) => {
    switch (path) {
      case "/notice": return "공지사항";
      case "/timetable": return "타임테이블";
      case "/club": return "동아리 정보";
      case "/resort": return "리조트 정보";
      case "/emergency": return "긴급연락망";
      case "/makers": return "만든이";
      case "/": return ""; // 홈 화면에서는 제목 안 띄움
      default: return "";
    }
  };

  const currentTitle = getPageTitle(location.pathname);

  return (
    <header className="relative flex justify-between items-center p-6 z-50">
      <button 
        onClick={onOpenSidebar} 
        className="flex items-center justify-center p-0 bg-transparent border-none cursor-pointer z-10"
      >
        <FiMenu size={24} className="text-black" />
      </button>

      <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-gray-900">
        {currentTitle}
      </h1>

      <img 
        src={logoImg} 
        alt="청춘 로고" 
        className="h-6 w-auto brightness-0 z-10" 
      />
    </header>
  );
};

export default Header;