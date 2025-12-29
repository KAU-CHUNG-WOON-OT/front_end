import { FiMenu } from "react-icons/fi";
import logoImg from "../assets/logo.svg";

interface HeaderProps {
  onOpenSidebar: () => void;
}

const Header = ({ onOpenSidebar }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center p-6">
      {/* 메뉴 버튼 */}
      <button 
        onClick={onOpenSidebar} 
        className="flex items-center justify-center p-0 bg-transparent border-none cursor-pointer"
      >
        <FiMenu size={24} className="text-white" />
      </button>

      {/* 로고 */}
      <img src={logoImg} alt="청춘 로고" className="h-6 w-auto" />
    </header>
  );
};

export default Header;