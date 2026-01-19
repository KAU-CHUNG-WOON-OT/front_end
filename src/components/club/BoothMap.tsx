import { FiMapPin } from "react-icons/fi";

const BoothMap = () => {
  return (
    <div className="bg-white rounded-[20px] p-5 shadow-sm mb-6 flex flex-col items-center">
      <h3 className="text-sm font-bold text-gray-600 mb-3 self-start">동아리 부스 맵</h3>
      
      {/* 지도 이미지 영역 (나중에 이미지로 교체) */}
      <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-400 text-xs">
        (지도 이미지)
      </div>

      <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
        <FiMapPin className="text-red-400" />
        <span>학생회관 앞 잔디광장 | 10:30~16:00</span>
      </div>
    </div>
  );
};

export default BoothMap;