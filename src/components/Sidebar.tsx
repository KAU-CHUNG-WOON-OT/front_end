import { FiX } from "react-icons/fi";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    "홈",
    "공지사항",
    "타임테이블",
    "공연정보",
    "장소정보",
    "긴급연락",
    "만든이",
  ];

  return (
    <>
      {/* 1. 배경 오버레이 */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* 2. 사이드바 */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-[250px] bg-white p-6 shadow-lg text-gray-800
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* 닫기 버튼 */}
        <button 
          onClick={onClose} 
          className="mb-8 block p-0 bg-transparent border-none cursor-pointer"
        >
          <FiX size={24} className="text-gray-800" />
        </button>

        {/* 메뉴 목록 */}
        <ul className="flex flex-col gap-6">
          {menuItems.map((item, index) => (
            <li key={index} className="text-lg font-medium cursor-pointer hover:text-brand-start transition-colors">
              {item}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;