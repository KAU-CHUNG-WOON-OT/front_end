import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { clubs } from "../data/clubs";

const ClubDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImgIndex, setCurrentImgIndex] = useState(0); 
  const scrollRef = useRef<HTMLDivElement>(null);

  const club = clubs.find((c) => c.id === Number(id));

  if (!club) return <div className="p-10 text-center">존재하지 않는 동아리입니다.</div>;

  const validImages = club.images ? club.images.filter(img => img !== "") : [];
  const hasImages = validImages.length > 0;
  
  const instaId = club.insta ? club.insta.replace("@", "") : "";

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentImgIndex(index);
    }
  };

  return (
    <div className="flex flex-col h-full w-full relative">
      
      {/* 1. 헤더 (상단 고정) */}
      <div className="flex items-center justify-between px-6 py-4 z-50 sticky top-0">
        <button onClick={() => navigate(-1)} className="p-1 -ml-2 cursor-pointer">
          <FiChevronLeft className="text-2xl text-black" />
        </button>
        <h1 className="text-lg font-bold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
          {club.name}
        </h1> 
      </div>

      {/* 2. 메인 스크롤 영역 (전체 패딩 적용) */}
      <div className="flex-1 overflow-y-auto no-scrollbar relative px-6 pb-20">
        
        {/* (1) 이미지 슬라이더 영역 */}
        {hasImages ? (
          <div className="w-full pt-4 pb-6">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="w-full aspect-video rounded-[20px] overflow-x-auto no-scrollbar snap-x snap-mandatory flex shadow-sm border border-gray-100 bg-white"
            >
              {validImages.map((imgUrl, index) => (
                <div key={index} className="flex-none w-full h-full snap-center">
                  <img 
                    src={imgUrl} 
                    alt={`${club.name} 활동 사진 ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* 인디케이터 (점) */}
            {validImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-3">
                {validImages.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentImgIndex === index 
                        ? "w-4 bg-gray-800" 
                        : "w-1.5 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6"></div>
        )}

        {/* (2) 정보 박스 */}
        <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-gray-100">
            
          {/* 텍스트 정보 리스트 */}
          <div className="mb-5 space-y-1.5">
            <p className="text-[15px] text-gray-900">
              <span className="font-bold">동아리명:</span> {club.name}
            </p>
            
            {club.room && club.room !== "-" && club.room !== "없음" && (
              <p className="text-[15px] text-gray-900">
                <span className="font-bold">위치:</span> {club.room}
              </p>
            )}
            
            {club.booth !== "ㅁㅁㅁ" && (
              <p className="text-[15px] text-gray-900">
                <span className="font-bold">부스위치:</span> {club.booth}
              </p>
            )}

            {club.insta && (
              <p className="text-[15px] text-gray-900">
                <span className="font-bold">인스타그램:</span>{" "}
                <a 
                  href={`https://instagram.com/${instaId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  @{instaId}
                </a>
              </p>
            )}
          </div>

          <hr className="border-gray-200 mb-5" />

          {/* 소개글 */}
          <div className="text-[15px] text-gray-700 leading-relaxed whitespace-pre-line break-words">
            {club.description}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClubDetail;