import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import CategoryList from "../components/club/CategoryList";
import BoothMap from "../components/club/BoothMap";
import ClubCard from "../components/club/ClubCard";

const dummyClubs = [
  { id: 11, name: "UMC", category: "학술", location: "A-3", description: "앱/웹 개발 동아리" },
  { id: 1, name: "멋쟁이 사자처럼", category: "학술", location: "A-2", description: "코딩 동아리" },
  { id: 2, name: "활주로", category: "밴드", location: "B-1", description: "락 밴드" },
  { id: 3, name: "이카루스", category: "운동", location: "C-3", description: "축구 동아리" },
  { id: 4, name: "울림", category: "예술", location: "D-1", description: "통기타 동아리" },
  { id: 5, name: "PEGASUS", category: "학술", location: "A-5", description: "천문 관측" },
  { id: 6, name: "JAZZ", category: "밴드", location: "B-2", description: "재즈 밴드" },
  { id: 7, name: "그림", category: "예술", location: "D-3", description: "미술 동아리" },
  { id: 8, name: "AirMan", category: "운동", location: "C-1", description: "농구 동아리" },
  { id: 9, name: "CCC", category: "종교", location: "E-1", description: "기독교 동아리" },
  { id: 10, name: "KAU-ON", category: "방송", location: "F-1", description: "방송국" },
];

const categories = ["전체", "학술", "밴드", "예술", "운동", "종교", "방송"];

const Club = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClubs = dummyClubs.filter((club) => {
    const matchCategory = selectedCategory === "전체" || club.category === selectedCategory;
    const matchSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col h-full w-full">
      
      <div className="flex-none px-5 pt-4 pb-2 z-20">
        
        <CategoryList 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelect={setSelectedCategory} 
        />
        
        <BoothMap />

        {/* 검색창 */}
        <div className="relative mb-2">
          <input
            type="text"
            placeholder="동아리 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-12 pl-4 pr-12 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:border-brand-start text-sm bg-white/80 backdrop-blur-sm"
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        </div>
      </div>

      {/* 📜 [하단 스크롤 영역]
          flex-1: 남은 공간 전부 차지
          overflow-y-auto: 내용이 넘치면 이 안에서만 스크롤 발생
      */}
      <div className="flex-1 overflow-y-auto relative">
        
        {/* ✨ 경계면 블러 효과 ✨ */}
        <div className="sticky top-0 left-0 w-full h-6 bg-gradient-to-b from-[#f0f8ff]/80 to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-2 gap-4 px-5 pb-24 -mt-4">
          {filteredClubs.map((club) => (
            <ClubCard 
              key={club.id} 
              club={club} 
              onClick={() => alert(`${club.name} 클릭됨!`)} 
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
  );
};

export default Club;