import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import MapModal from "../components/resort/MapModal";

import CategoryList from "../components/club/CategoryList";

import conventionImg from "../assets/convention.jpg"; 

import { conventionRooms } from "../data/resort"; 

const ConventionDetail = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("전체");

  const tabs = ["전체", "1층", "2층"];

  const filteredRooms = activeTab === "전체" 
    ? conventionRooms 
    : conventionRooms.filter((room) => room.floor === activeTab);

  return (
    <div className="flex flex-col h-full w-full relative">
      
      <div className="flex items-center justify-between px-6 py-4 z-50 sticky top-0 backdrop-blur-md">
        <button onClick={() => navigate(-1)} className="p-1 -ml-2 cursor-pointer active:scale-95 transition-transform">
          <FiChevronLeft className="text-2xl text-[#3a3f4b]" />
        </button>
        <h1 className="text-[#3a3f4b] text-base font-bold absolute left-1/2 transform -translate-x-1/2">
          컨벤션센터
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
              src={conventionImg} 
              alt="컨벤션센터 지도" 
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="w-full z-30">
            <CategoryList 
              categories={tabs} 
              selectedCategory={activeTab} 
              onSelect={setActiveTab} 
            />
          </div>

          <div className="flex flex-col gap-4">
            {filteredRooms.map((room) => (
              <div 
                key={room.id}
                className="bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(214,235,255,0.65)_100%)] rounded-[20px] p-5 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.18)] flex gap-4 items-center"
              >
                <div className="w-[84px] h-[84px] flex-shrink-0 rounded-[12px] overflow-hidden bg-white/50 flex items-center justify-center">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className={`w-full h-full ${room.isLogo ? "object-contain p-2" : "object-cover"}`} 
                  />
                </div>
                
                <div className="flex-1 py-1">
                  <h3 className="font-bold text-[16px] text-[#3a3f4b] mb-1.5">{room.name}</h3>
                  
                  <p className="text-[12px] font-semibold text-gray-800 mb-0.5">위치</p>
                  <ul className="text-[12px] text-gray-700 space-y-0.5 ml-2 font-medium mb-1.5">
                    <li className="relative before:content-['•'] before:absolute before:-left-2.5 before:text-gray-700">
                      {room.location}
                    </li>
                  </ul>

                  {room.purpose && (
                    <>
                      <p className="text-[12px] font-semibold text-gray-800 mb-0.5">용도</p>
                      <ul className="text-[12px] text-gray-700 space-y-0.5 ml-2 font-medium">
                        <li className="relative before:content-['•'] before:absolute before:-left-2.5 before:text-gray-700">
                          {room.purpose}
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      <MapModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imageSrc={conventionImg} 
      />

    </div>
  );
};

export default ConventionDetail;