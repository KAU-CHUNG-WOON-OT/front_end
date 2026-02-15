import logoImg from "../../assets/logo.svg";

// ClubData 인터페이스가 다른 파일에 있다면 import 해오세요.
export interface ClubData {
  id: number;
  name: string;
  category: string;
  room: string;
  booth: string;
  description: string;
  logo_img: string;
  images: string[];
  insta: string;
}

interface ClubCardProps {
  club: ClubData;
  onClick: () => void;
}

const ClubCard = ({ club, onClick }: ClubCardProps) => {
  // 예외 처리할 동아리 이름 
  const wideLogoClubs = ["랩플레인", "SRS", "IVF", "IKAU"];

  // 동아리가 예외 목록에 포함되는지 확인
  const isWideLogo = wideLogoClubs.includes(club.name);

  return (
    <div 
      onClick={onClick}
      className="rounded-[20px] p-4 border border-transparent transition-all cursor-pointer active:scale-95 flex flex-col items-center justify-center text-center aspect-square
        bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(214,235,255,0.65)_100%)]
        shadow-[0px_6px_10px_0px_rgba(0,0,0,0.18)]
        hover:-translate-y-px"
    >
      {/* 1. 로고 영역 */}
      <div className={`mb-2 flex items-center justify-center overflow-hidden ${
        isWideLogo ? "w-full h-16" : "w-16 h-16 rounded-2xl"
      }`}>
        {club.logo_img ? (
           <img 
             src={club.logo_img} 
             alt={`${club.name} 로고`} 
             className={`w-full h-full ${isWideLogo ? "object-contain" : "object-cover"}`} 
           />
        ) : (
           <img 
             src={logoImg} 
             alt="기본 로고" 
             className="w-full h-full object-contain brightness-0 opacity-90" 
           />
        )}
      </div>
      
      {/* 2. 동아리명 */}
      <h3 className="font-bold text-[#3a3f4b] text-sm leading-tight break-keep mb-0.5">
        {club.name}
      </h3>
      
      {/* 3. 부스 위치 */}
      {club.booth !== "ㅁㅁㅁ" && (
        <p className="text-xs font-medium text-[#8a94a6]">
          {club.booth}
        </p>
      )}
    </div>
  );
};

export default ClubCard;