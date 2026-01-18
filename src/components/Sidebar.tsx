import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; 

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  // 메뉴 이름과 이동할 경로(path)를 매칭
  const menuItems = [
    { label: "홈", path: "/" },
    { label: "공지사항", path: "/notice" },
    { label: "타임테이블", path: "/timetable" },
    { label: "동아리 정보", path: "/club" },
    { label: "리조트 정보", path: "/resort" },
    { label: "긴급연락", path: "/emergency" },
    { label: "만든이", path: "/makers" },
  ];

  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-[215px] bg-sidebar-bg p-6 shadow-lg text-gray-800
          transform transition-transform duration-300 ease-in-out
          flex flex-col justify-between
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          <button 
            onClick={onClose} 
            className="mb-8 block p-0 bg-transparent border-none cursor-pointer"
          >
            <FiX size={24} className="text-gray-800" />
          </button>

          <ul className="flex flex-col gap-5">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  onClick={onClose}
                  className="text-[17px] font-bold cursor-pointer hover:text-brand-start transition-colors block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center pb-4">
          <img 
            src="/maha.svg" 
            alt="마하 마스코트" 
            className="w-full max-w-[150px] h-auto object-contain"
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;