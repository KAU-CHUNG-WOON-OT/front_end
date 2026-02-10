import { useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CategoryList from "../components/club/CategoryList";
import BoothMap from "../components/club/BoothMap";
import ClubCard from "../components/club/ClubCard";
import MapModal from "../components/club/MapModal";
import { clubs } from "../data/clubs"; 

const categories = ["전체", "항공분과", "연행분과", "종교분과", "체육분과", "학술분과"];

const Club = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const filteredClubs = clubs.filter((club) => {
    // 1. 카테고리 필터
    const matchCategory = selectedCategory === "전체" || club.category === selectedCategory;
    
    // 2. 검색어 필터 (이름 OR 설명)
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    // 이름에 포함되어 있는지 확인
    const matchName = club.name.toLowerCase().includes(lowerSearchTerm);
    
    // 설명(description)에 포함되어 있는지 확인 
    const matchDescription = club.description 
      ? club.description.toLowerCase().includes(lowerSearchTerm) 
      : false;

    // 카테고리가 맞고, (이름 혹은 설명에 검색어가 포함되면) 리턴
    return matchCategory && (matchName || matchDescription);
  });

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm(""); 
    
    if (scrollContainerRef.current) {
      setTimeout(() => {
        if (scrollContainerRef.current) {
           scrollContainerRef.current.scrollTop = 0;
        }
      }, 0);
    }
  };

  return (
    <>
      <div className="flex flex-col h-full w-full">
        
        {/* 1. 상단 고정 영역: 카테고리 리스트 */}
        <div className="flex-none px-8 pt-4 pb-2 z-30">
          <CategoryList 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelect={handleCategorySelect} 
          />
        </div>
        
        {/* 2. 스크롤 영역 */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto no-scrollbar relative"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)"
          }}
        >
          
          {/* (1) 부스 맵: '전체'일 때만 표시 */}
          {selectedCategory === "전체" && (
            <div className="px-8 mt-2 mb-4">
              <BoothMap onClick={() => setIsMapModalOpen(true)} />
            </div>
          )}

          {/* (2) 검색창: Sticky 고정 */}
          <div 
            ref={searchBarRef}
            className="sticky top-0 z-20 px-8 pb-4 pt-2 backdrop-blur-md bg-white/10"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="동아리 이름, 소개 검색" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-6 pr-12 rounded-full border border-transparent shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] focus:outline-none focus:border-brand-start text-sm bg-white"
              />
              <FiSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-800 text-xl" />
            </div>
          </div>
          
          {/* (3) 동아리 카드 리스트 */}
          <div className="grid grid-cols-2 gap-4 px-9 pb-32">
            {filteredClubs.map((club) => (
              <ClubCard 
                key={club.id} 
                club={club} 
                onClick={() => navigate(`/club/${club.id}`)} 
              />
            ))}
            {filteredClubs.length === 0 && (
              <div className="col-span-2 py-10 text-center text-gray-500 text-sm">
                검색 결과가 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
      <MapModal isOpen={isMapModalOpen} onClose={() => setIsMapModalOpen(false)} />
    </>
  );
};

export default Club;