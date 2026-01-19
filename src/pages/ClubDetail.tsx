import { useParams, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { clubs } from "../data/clubs";
import logoImg from "../assets/logo.svg";

const ClubDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const club = clubs.find((c) => c.id === Number(id));

  if (!club) return <div className="p-10 text-center">존재하지 않는 동아리입니다.</div>;

  return (
    <div className="flex flex-col h-full w-full relative">
        
      <div className="flex items-center justify-between px-6 py-4 z-20">
        <button onClick={() => navigate(-1)} className="p-1 -ml-2 cursor-pointer">
          <FiChevronLeft className="text-2xl text-black" />
        </button>
        <h1 className="text-lg font-bold text-gray-900 absolute left-1/2 transform -translate-x-1/2">
          {club.name}
        </h1>
        <img src={logoImg} alt="청운 로고" className="h-6 w-auto brightness-0" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-20 no-scrollbar">
        
        <div className="mt-10 w-82 h-52 mx-auto rounded-[20px] overflow-hidden shadow-sm mb-6">
          <img 
            src="/example.jpg" 
            alt="동아리 활동 사진" 
            className="w-full h-full object-cover"
          />
        </div>


        <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-gray-100">
          
          <div className="mb-4 space-y-1">
            <h2 className="text-base font-bold text-gray-900">
              동아리명: {club.name}
            </h2>
            
            <p className="text-sm font-medium text-gray-700">
              <span className="font-bold text-gray-900 mr-2">위치:</span> 
              {club.room}
            </p>
            <p className="text-sm font-medium text-gray-700">
              <span className="font-bold text-gray-900 mr-2">부스위치:</span> 
              {club.booth}
            </p>
          </div>

          <hr className="border-gray-200 mb-4" />

          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {club.description}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClubDetail;