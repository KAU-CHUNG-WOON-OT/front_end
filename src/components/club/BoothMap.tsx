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
    <div className="bg-white/50 backdrop-blur-md rounded-[32px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] mb-8 flex flex-col items-center">

      <div className="w-full flex justify-center items-center mb-5">
        <h3 className="text-[17px] font-bold text-gray-800">동아리 부스 맵</h3>
      </div>

      <div className="w-full rounded-[20px] mb-4 overflow-hidden shadow-sm relative">
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
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-1.5 mb-4">
        {mapImages.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "w-4 bg-gray-700"
                : "w-1 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default BoothMap;