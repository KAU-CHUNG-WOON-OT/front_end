import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import MapModal from "../components/resort/MapModal"; 
import hambaekImg from "../assets/Hambaek.jpg";
import cuImg from "../assets/cu.png"; 

const HambaekDetail = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full w-full relative">
      
      <div className="flex items-center justify-between px-6 py-4 z-50 sticky top-0 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-1 -ml-2 cursor-pointer active:scale-95 transition-transform">
          <FiChevronLeft className="text-2xl text-[#3a3f4b]" />
        </button>
        <h1 className="text-[#3a3f4b] text-base font-bold absolute left-1/2 transform -translate-x-1/2">
          함백동
        </h1> 
      </div>

      <div 
        className="flex-1 overflow-y-auto no-scrollbar relative"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)"
        }}
      >
        <div className="flex flex-col gap-6 px-7 pb-24 pt-2">
          
          <div 
            className="w-full rounded-[20px] overflow-hidden shadow-[0px_6px_10px_0px_rgba(0,0,0,0.18)] cursor-pointer active:scale-[0.98] transition-transform duration-200"
            onClick={() => setIsModalOpen(true)}
          >
            <img 
              src={hambaekImg} 
              alt="함백동 지도" 
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col gap-5">
            
            <div className="bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(214,235,255,0.65)_100%)] rounded-[20px] p-6 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.18)] flex items-center gap-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)] active:scale-[0.98] active:translate-y-0 active:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <img src={cuImg} alt="CU 로고" className="w-full h-full object-contain" />
              </div>
              
              <div>
                <h3 className="font-bold text-[17px] text-[#3a3f4b] mb-2">CU편의점</h3>
                <p className="text-[13px] font-semibold text-gray-800 mb-1">운영시간</p>
                <ul className="text-[13px] text-gray-700 space-y-0.5 ml-2 font-medium">
                  <li className="relative before:content-['•'] before:absolute before:-left-2.5 before:text-gray-700">
                    비수기/평일 : 08:00 ~ 23:00
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:-left-2.5 before:text-gray-700">
                    성수기/주말 : 08:00 ~ 24:00
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(214,235,255,0.65)_100%)] rounded-[20px] p-6 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.18)] flex gap-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)] active:scale-[0.98] active:translate-y-0 active:shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]">
              <div className="flex-shrink-0 w-10 pt-0.5">
                <h3 className="font-bold text-[17px] text-[#3a3f4b]">객실</h3>
              </div>
              
              <div>
                <p className="text-[13px] font-bold text-[#3a3f4b] mb-2">단과대학 및 학(부)과 배정 객실</p>
                <ul className="text-[13px] text-gray-700 space-y-1 ml-2 font-medium">
                  <li className="relative before:content-['•'] before:absolute before:-left-2.5 before:text-gray-700">3층:</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-2.5 before:text-gray-700">4층:</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-2.5 before:text-gray-700">5층:</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-2.5 before:text-gray-700">6층:</li>
                  <li className="relative before:content-['•'] before:absolute before:-left-2.5 before:text-gray-700">7층:</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <MapModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imageSrc={hambaekImg} 
      />

    </div>
  );
};

export default HambaekDetail;