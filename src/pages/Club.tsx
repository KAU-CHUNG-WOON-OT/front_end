import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CategoryList from "../components/club/CategoryList";
import BoothMap from "../components/club/BoothMap";
import ClubCard from "../components/club/ClubCard";
import MapModal from "../components/club/MapModal";
import { clubs } from "../data/clubs"; 

const categories = ["전체", "밴드", "예술", "운동", "학술", "종교", "사회"];

const Club = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const filteredClubs = clubs.filter((club) => {
    const matchCategory = selectedCategory === "전체" || club.category === selectedCategory;
    const matchSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="flex-none px-8 pt-4 pb-4 z-20 bg-transparent">
          <CategoryList 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
          <BoothMap onClick={() => setIsMapModalOpen(true)} />

          <div className="relative">
            <input
              type="text"
              placeholder="동아리 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 pl-6 pr-12 rounded-full border border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.08)] focus:outline-none focus:border-brand-start text-sm bg-white"
            />
            <FiSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-800 text-xl" />
          </div>
        </div>
        
        <div 
          className="flex-1 overflow-y-auto relative no-scrollbar"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)"
          }}
        >
          <div className="grid grid-cols-2 gap-4 px-9 pb-32 pt-2">
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