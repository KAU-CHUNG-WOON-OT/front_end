import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CategoryList from "../components/club/CategoryList";
import BoothMap from "../components/club/BoothMap";
import ClubCard from "../components/club/ClubCard";
import MapModal from "../components/club/MapModal";

// 실제 데이터 반영 (제공해주신 텍스트 기반)
const realClubs = [
  // 1. 학술 (Aviation/Engineering/Study)
  { id: 1, name: "UMC", category: "학술", location: "학생회관 318호", description: "앱 런칭 및 IT 개발 동아리" }, //
  { id: 2, name: "아스트로 체이서", category: "학술", location: "교내", description: "천체 관측 및 천문 봉사 활동" }, //
  { id: 3, name: "SRS", category: "학술", location: "학생회관 324호", description: "로켓 제작 및 발사 연구" }, //
  { id: 4, name: "항공기제작연구회", category: "학술", location: "학생회관 327호", description: "경항공기 독자 설계 및 제작" }, //
  { id: 5, name: "MAC", category: "학술", location: "학생회관 325호", description: "모형 항공기 제작 및 연구" }, //
  { id: 6, name: "카우보이", category: "학술", location: "항우기 B101호", description: "자작 자동차 제작 및 대회 출전" }, //
  { id: 7, name: "IPR", category: "학술", location: "학생회관 320호", description: "소프트웨어 연구 및 프로그래밍" }, //
  { id: 8, name: "ESC", category: "학술", location: "학생회관 313호", description: "전자회로 설계 및 드론 프로젝트" }, //
  { id: 9, name: "SEED", category: "학술", location: "박물관 311-A", description: "창업 인프라 활성화 및 창업 교육" }, //

  // 2. 밴드 (Music/Band)
  { id: 10, name: "활주로", category: "밴드", location: "학관 뒤 컨테이너", description: "역사 깊은 락 밴드 공연 활동" }, //
  { id: 11, name: "줄울림", category: "밴드", location: "학생회관 335호", description: "어쿠스틱 밴드 및 기타 스터디" }, //
  { id: 12, name: "우리부모", category: "밴드", location: "학관 뒤 컨테이너", description: "자유로운 분위기의 밴드 활동" }, //
  { id: 13, name: "재징유", category: "밴드", location: "학생회관 330호", description: "재즈 음악 감상 및 연주" }, //
  { id: 14, name: "올뮤", category: "밴드", location: "학생회관 304호", description: "다양한 악기 연주 및 그룹사운드" }, //
  { id: 15, name: "에어락", category: "밴드", location: "교내", description: "자신들만의 음악을 추구하는 밴드" }, //

  // 3. 예술 (Dance/Photo/Traditional/Classical)
  { id: 16, name: "D.O.S", category: "예술", location: "학생회관 332호", description: "방송댄스 및 춤 공연 활동" }, //
  { id: 17, name: "광대와끼", category: "예술", location: "학생회관 333호", description: "사물놀이 및 전통 악기 연주" }, //
  { id: 18, name: "FICTURE", category: "예술", location: "학생회관 316호", description: "사진 촬영 및 출사, 전시회" }, //
  { id: 19, name: "알피네", category: "예술", location: "학생회관 328호", description: "클래식 기타 연주 및 보급" }, //
  { id: 20, name: "아카로아", category: "예술", location: "학생회관 329호", description: "아카펠라 공연 및 버스킹" }, //
  { id: 21, name: "KAUAO", category: "예술", location: "교내", description: "관현악단 및 클래식 연주회" }, //
  { id: 22, name: "랩플레인", category: "예술", location: "교내", description: "힙합 공연 및 음원 제작" }, //

  // 4. 운동 (Sports/Leisure)
  { id: 23, name: "에어윙즈", category: "운동", location: "학생회관 341호", description: "축구 경기 및 대회 참가" }, //
  { id: 24, name: "ASTROS", category: "운동", location: "학생회관 303호", description: "야구부 및 아마추어 대회 참가" }, //
  { id: 25, name: "AVIATORS", category: "운동", location: "학생회관 338호", description: "농구 경기 및 관련 활동" }, //
  { id: 26, name: "ACE", category: "운동", location: "학생회관 319호", description: "테니스 레슨 및 경기" }, //
  { id: 27, name: "송골매", category: "운동", location: "학생회관 326호", description: "행글라이더 비행 및 제작 교육" }, //
  { id: 28, name: "학생활공회", category: "운동", location: "학생회관 314호", description: "글라이더 비행 및 조종 교육" }, //
  { id: 29, name: "LAPUTA", category: "운동", location: "학생회관 323호", description: "열기구 조종 및 항공 스포츠" }, //
  { id: 30, name: "보잉", category: "운동", location: "학생회관 336호", description: "보드(스노우/스케이트) 레저 스포츠" }, //
  { id: 31, name: "태권도부", category: "운동", location: "학생회관 305호", description: "태권도 수련 및 대회 출전" }, //
  { id: 32, name: "활검회", category: "운동", location: "학생회관 321호", description: "검도 기술 연마 및 시합" }, //
  { id: 33, name: "수박도", category: "운동", location: "학생회관 315호", description: "전통무예 수박도 수련" }, //
  { id: 34, name: "보빌보빌", category: "운동", location: "교내", description: "웨이트 트레이닝 및 바디프로필" }, //
  { id: 35, name: "KGA", category: "운동", location: "교내", description: "골프 연습 및 라운딩" }, //

  // 5. 종교 (Religion)
  { id: 36, name: "아오스딩", category: "종교", location: "학생회관 302호", description: "가톨릭 신앙 모임" }, //
  { id: 37, name: "CCC", category: "종교", location: "학생회관 306호", description: "기독교 선교 및 채플" }, //
  { id: 38, name: "IVF", category: "종교", location: "학생회관 340호", description: "성경 연구 및 기도 모임" }, //

  // 6. 사회 (Social/Culture/Volunteer)
  { id: 39, name: "로타렉트", category: "사회", location: "학생회관 322호", description: "연합 봉사 및 사회 공헌 활동" }, //
  { id: 40, name: "PTPI", category: "사회", location: "학생회관 317호", description: "대학생 연합 봉사 및 캠페인" }, //
  { id: 41, name: "수레바퀴", category: "사회", location: "학생회관 312호", description: "독서/영화 토론 및 소통" }, //
  { id: 42, name: "세인영", category: "사회", location: "학생회관 331호", description: "영화 관람 및 문화 생활 공유" }, //
  { id: 43, name: "이웃사촌부", category: "사회", location: "학생회관 343호", description: "일본어 학습 및 문화 교류" }, //
  { id: 44, name: "북앤락", category: "사회", location: "학생회관 338호", description: "독서 기행 및 문화 활동" }, //
  { id: 45, name: "아이카우", category: "사회", location: "교내", description: "중고등학생 대상 전공 강연 멘토링" }, //
];

// 카테고리 순서: 전체, 밴드, 예술, 운동, 학술, 종교, 사회
const categories = ["전체", "밴드", "예술", "운동", "학술", "종교", "사회"];

const Club = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  // 검색 및 필터링 로직
  const filteredClubs = realClubs.filter((club) => {
    const matchCategory = selectedCategory === "전체" || club.category === selectedCategory;
    const matchSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <div className="flex flex-col h-full w-full">
        {/* 상단 고정 영역 */}
        <div className="flex-none px-12 pt-4 pb-4 z-20 bg-transparent">
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
        
        {/* 하단 스크롤 영역 */}
        <div 
          className="flex-1 overflow-y-auto relative no-scrollbar"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)"
          }}
        >
          <div className="grid grid-cols-2 gap-4 px-12 pb-32 pt-2">
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