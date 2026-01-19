interface BoothMapProps {
  onClick: () => void;
}

const BoothMap = ({ onClick }: BoothMapProps) => {
  return (
    <div 
      className="bg-[#F5F6FF] rounded-[20px] p-5 shadow-sm mb-6 flex flex-col items-center cursor-pointer transition-transform active:scale-95"
      onClick={onClick}
    >
      <h3 className="text-ms font-bold text-gray-800 mb-4">동아리 부스 맵</h3>
      
      {/* 지도 이미지 영역 */}
      <div className="w-full aspect-[4/3] bg-[#F5F6FF] rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-gray-100">
        <img src="/map.svg" alt="지도 미리보기" className="w-full h-full object-contain p-2" />
      </div>

      {/* 위치 정보 */}
      <div className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
        <span>📍 OO홀 | 0월 00일 10:30~16:00</span>
      </div>
    </div>
  );
};

export default BoothMap;