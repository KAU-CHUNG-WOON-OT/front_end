import { useNavigate } from "react-router-dom";
import { FiChevronRight, FiGrid, FiAlertTriangle } from "react-icons/fi";
import ContactCard from "../components/emergency/ContactCard";
import { mainContacts, colleges } from "../data/emergency";
import logoImg from "../assets/logo.svg";

const Emergency = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full w-full px-6 pt-6 pb-20 overflow-y-auto no-scrollbar">
      
      {/* 1. 행동 요령 */}
      <div 
        className="w-full rounded-[24px] p-6 shadow-[0_8px_30px_rgb(255,0,0,0.12)] text-white mb-6 shrink-0"
        style={{
          background: "linear-gradient(to bottom right, #FF001F 0%, rgba(255, 0, 31, 0.8) 100%)"
        }}
      >
        <div className="flex items-start gap-2 mb-4">
          <FiAlertTriangle className="text-xl flex-shrink-0 mt-0.5" />
          <h2 className="text-base font-bold leading-tight">긴급 상황 시 행동 요령</h2>
        </div>
        
        <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-white/80">
          <li className="text-xs font-medium leading-snug">
            침착하게 상황을 파악하고 주변에 알립니다
          </li>
          <li className="text-xs font-medium leading-snug">
            학생회 또는 방장에게 상황을 알립니다
          </li>
          <li className="text-xs font-medium leading-snug">
            개인 연락처는 허가 없이 공유하지 말아주세요
          </li>
        </ul>
      </div>

      {/* 2. 총학생회 연락처 */}
      <div className="shrink-0 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white/60 backdrop-blur-md border border-white/40 mb-6">
        
        <div className="bg-[#FFF7ED] px-6 py-4 border-b border-[#FFD6A8]">
           <img 
             src={logoImg} 
             alt="청운" 
             className="h-5 w-auto brightness-0 opacity-90" 
           />
        </div>
        
        <div className="px-2 py-4 flex flex-col gap-3">
          <ContactCard contacts={mainContacts} />
        </div>
      </div>

      {/* 3. 단과대별 리스트 */}
      <div className="shrink-0 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white/60 backdrop-blur-md border border-white/40">
        
        <div className="bg-[#FFF7ED] px-6 py-4 border-b border-[#FFD6A8] flex items-center gap-2">
           <span className="text-[15px] font-bold text-gray-900">단과대별 학생회</span>
        </div>

        <div className="flex flex-col">
          {colleges.map((college) => (
            <button
              key={college.id}
              onClick={() => navigate(`/emergency/${college.id}`)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/40 transition-colors border-b border-gray-200/60 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <FiGrid className="text-gray-900 text-lg" />
                <span className="text-[15px] font-medium text-gray-800">{college.name}</span>
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