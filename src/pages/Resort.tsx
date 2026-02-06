import { useState } from "react";

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

  const tabs = ["전체", "함백동", "다산동"];

  return (
    <div className="flex flex-col h-full w-full">
      
      <div className="flex-none pt-[8px] pb-4">
        <div className="mx-auto flex max-w-[402px] justify-start gap-[10px] px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-[35px] px-4 rounded-[25px] text-[14px] font-bold leading-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors ${
                activeTab === tab
                  ? "bg-[#252b4f] text-white" 
                  : "bg-white text-[#252b4f]"
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
              className="bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(214,235,255,0.65)_100%)] rounded-[20px] p-6 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.18)] flex flex-col items-center border border-transparent"
            >
              <h3 className="text-[#3a3f4b] mb-5 text-base font-bold">{item.name}</h3>

              <div className="w-full aspect-square rounded-2xl mb-5 flex items-center justify-center overflow-hidden shadow-sm border border-white/50 bg-white">
                 <img 
                   src="/map.svg" 
                   alt={`${item.name} 지도`} 
                   className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-300" 
                 />
              </div>

              <div className="flex items-center text-xs text-[#8a94a6] font-medium bg-white px-3 py-1.5 rounded-lg shadow-sm">
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