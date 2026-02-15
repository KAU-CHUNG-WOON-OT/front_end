import { useState, useRef } from "react";
import booth1 from "../../assets/booth1.png"; 
import booth2 from "../../assets/booth2.jpg"; 

interface BoothMapProps {
  onClick: (imageSrc: string) => void;
}

const mapImages = [
  { src: booth1, label: "부스 배치도 1" },
  { src: booth2, label: "부스 배치도 2" },
];

const BoothMap = ({ onClick }: BoothMapProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setCurrentIndex(newIndex);
    }
  };

  return (
    // 박스
    <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-[20px] p-5 shadow-[0_4px_16px_0px_rgba(31,38,135,0.07)] mb-6 flex flex-col items-center">
      
      <div className="w-full flex justify-center items-center mb-3">
        <h3 className="text-base font-bold text-gray-800">동아리 부스 맵</h3>
      </div>
      
      {/* 이미지 슬라이드 영역 */}
      <div className="w-full aspect-[4/3] bg-white/70 rounded-xl mb-3 overflow-hidden border border-white/50 shadow-sm relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="w-full h-full flex overflow-x-auto snap-x snap-mandatory overscroll-y-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {mapImages.map((img, index) => (
            <div 
              key={index}
              className="flex-none w-full h-full snap-center flex items-center justify-center cursor-pointer active:opacity-90 transition-opacity"
              onClick={() => onClick(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.label} 
                className="w-full h-full object-contain p-1" 
                draggable={false} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* 인디케이터 (점) */}
      <div className="flex gap-1.5 mb-3">
        {mapImages.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx 
                ? "w-4 bg-[#7BD6E2]" 
                : "w-1.5 bg-gray-300/60"
            }`}
          />
        ))}
      </div>

      {/* 위치 정보 */}
      <div className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
        <span></span>
      </div>
    </div>
  );
};

export default BoothMap;