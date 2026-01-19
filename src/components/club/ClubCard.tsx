import logoImg from "../../assets/logo.svg";

export interface ClubData {
  id: number;
  name: string;
  category: string;
  room: string;
  booth: string;
  description: string;
}

interface ClubCardProps {
  club: ClubData;
  onClick: () => void;
}

const ClubCard = ({ club, onClick }: ClubCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-[20px] p-4 shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-transparent transition-all cursor-pointer active:scale-95 flex flex-col items-center justify-center text-center aspect-square"
    >
      <div className="w-10 h-10 mb-2">
        <img 
          src={logoImg} 
          alt={`${club.name} 로고`} 
          className="w-full h-full object-contain brightness-0 opacity-90" 
        />
      </div>
      
      <h3 className="font-bold text-gray-900 text-sm leading-tight break-keep mb-0.5">
        {club.name}
      </h3>
      
      <p className="text-xs font-medium text-gray-500">
        {club.booth}
      </p>
    </div>
  );
};

export default ClubCard;