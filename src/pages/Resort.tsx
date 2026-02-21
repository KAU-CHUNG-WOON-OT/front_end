import { useState } from "react";
import MapModal from "../components/resort/MapModal";

import hambaekImg from "../assets/Hambaek.jpg";
import conventionImg from "../assets/convention.jpg"; 

const Resort = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMapImage, setSelectedMapImage] = useState("");

  const resorts = [
    { 
      id: 1, 
      name: "함백동", 
      mapImage: hambaekImg 
    },
    { 
      id: 2, 
      name: "컨벤션센터", 
      mapImage: conventionImg 
    },
  ];

  const handleMapClick = (imageSrc: string) => {
    setSelectedMapImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-full w-full">

      <div 
        className="flex-1 overflow-y-auto relative no-scrollbar"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)"
        }}
      >
        <div className="flex flex-col gap-6 px-7 pb-24 pt-2">
          {resorts.map((item) => (
            <div 
              key={item.id} 
              className="bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(214,235,255,0.65)_100%)] rounded-[20px] p-6 shadow-[0px_6px_10px_0px_rgba(0,0,0,0.18)] flex flex-col items-center border border-transparent"
            >
              <h3 className="text-[#3a3f4b] mb-5 text-base font-bold">{item.name}</h3>

              <div 
                className="w-full rounded-2xl mb-5 overflow-hidden border border-[#e0e0e0] cursor-pointer active:scale-95 transition-transform duration-200"
                onClick={() => handleMapClick(item.mapImage)}
              >
                 <img 
                   src={item.mapImage} 
                   alt={`${item.name} 지도`} 
                   className="w-full h-auto block hover:scale-105 transition-transform duration-300" 
                 />
              </div>

              <div className="flex items-center text-xs text-[#8a94a6] font-medium">
                 <span>정보 보기</span>
              </div>
            </div> 
          ))}
        </div>
      </div>

      <MapModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imageSrc={selectedMapImage}
      />

    </div>
  );
};

export default Resort;