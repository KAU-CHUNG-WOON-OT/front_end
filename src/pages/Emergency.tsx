import { useNavigate } from "react-router-dom";
import { FiChevronRight, FiGrid } from "react-icons/fi";
import ActionGuide from "../components/emergency/ActionGuide";
import ContactCard from "../components/emergency/ContactCard";
import { mainContacts, colleges } from "../data/emergency";

const Emergency = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full w-full px-6 pt-6 pb-20 overflow-y-auto no-scrollbar">
      
      {/* 1. 행동 요령 */}
      <div className="shadow-[0_8px_30px_rgb(255,0,0,0.12)] rounded-[20px] mb-6">
         <ActionGuide />
      </div>

      {/* 2. 총학생회 연락처 (배열 전체 전달) */}
      <div className="bg-white rounded-[20px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-6">
        <ContactCard contacts={mainContacts} />
      </div>

      {/* 3. 단과대별 리스트 */}
      <div className="bg-white rounded-[25px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <div className="px-5 py-4 border-b border-gray-50 flex items-center gap-2">
           <FiGrid className="text-gray-400" />
           <span className="text-sm font-bold text-gray-800">단과대별 학생회</span>
        </div>

        <div className="flex flex-col">
          {colleges.map((college) => (
            <button
              key={college.id}
              onClick={() => navigate(`/emergency/${college.id}`)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors border-b last:border-b-0 border-gray-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-3.5 bg-gray-300 rounded-full" />
                <span className="text-[15px] font-bold text-gray-600">{college.name}</span>
              </div>
              <FiChevronRight className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emergency;