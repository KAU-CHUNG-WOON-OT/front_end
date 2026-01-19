import { useState } from "react";
import { FiMapPin } from "react-icons/fi";

const Resort = () => {
  const [activeTab, setActiveTab] = useState("전체");

  const resorts = [
    { 
      id: 1, 
      name: "함백동", 
      location: "📍 OO홀 ", 
      time: "0월 00일 10:30~16:00" 
    },
    { 
      id: 2, 
      name: "다산동", 
      location: "📍 OO홀 ", 
      time: "0월 00일 10:30~16:00" 
    },
  ];

  const filteredResorts = activeTab === "전체"
    ? resorts
    : resorts.filter((r) => r.name === activeTab);

  return (
    <div className="flex flex-col h-full w-full">
      
      <div className="flex-none px-7 pt-6 pb-4 z-20 bg-transparent">
        <div className="flex gap-3">
          {["전체", "함백동", "다산동"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeTab === tab
                  ? "bg-[#2F3E4E] text-white" 
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div 
        className="flex-1 overflow-y-auto relative no-scrollbar"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)"
        }}
      >
        <div className="flex flex-col gap-6 px-7 pb-24 pt-2">
          {filteredResorts.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/80 backdrop-blur-sm rounded-[20px] p-6 shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-white flex flex-col items-center"
            >
              <h3 className="text-gray-800 mb-5 text-base">{item.name}</h3>

              {/* 지도 이미지 */}
              <div className="w-full aspect-square rounded-2xl mb-5 flex items-center justify-center overflow-hidden shadow-inner border border-gray-50">
                 <img 
                   src="/map.svg" 
                   alt={`${item.name} 지도`} 
                   className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-300" 
                 />
              </div>

              {/* 하단 정보 */}
              <div className="flex items-center  text-xs text-gray-600 font-medium bg-gray-50 px-3 py-1.5 rounded-lg">
                 <span>{item.location} | {item.time}</span>
              </div>
            </div> 
          ))}
        </div>
      </div>

    </div>
  );
};

export default Resort;