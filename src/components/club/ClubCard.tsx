interface ClubData {
  id: number;
  name: string;
  location: string;
  description: string;
}

interface ClubCardProps {
  club: ClubData;
  onClick: () => void;
}

const ClubCard = ({ club, onClick }: ClubCardProps) => {
  return (
    <div
      className="bg-white rounded-[20px] p-5 shadow-sm flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      {/* 엠블럼 이미지로 교체 (public 폴더 경로 사용) */}
      <img 
        src="/emblem.svg" 
        alt={club.name} 
        className="w-12 h-12 object-contain mb-1" 
      />
      
      <div className="text-center">
        <h4 className="font-bold text-gray-900 text-base leading-tight mb-1">
          {club.name}
        </h4>
        <p className="text-xs text-gray-500 font-medium">
          부스위치: {club.location}
        </p>
      </div>
    </div>
  );
};

export default ClubCard;