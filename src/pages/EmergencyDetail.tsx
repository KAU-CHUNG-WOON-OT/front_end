import { useParams } from "react-router-dom";
import ContactCard from "../components/emergency/ContactCard";
import { colleges } from "../data/emergency";

const EmergencyDetail = () => {
  const { id } = useParams();
  
  const college = colleges.find((c) => c.id === id);

  if (!college) return <div className="p-10 text-center">정보를 찾을 수 없습니다.</div>;

  return (
    <div className="flex flex-col h-full w-full bg-[#F9FAFB]">
      
      {/* 리스트 영역 */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-24 no-scrollbar flex flex-col gap-6">
        
        {college.majors.length > 0 ? (
          college.majors.map((major, index) => (
            <div 
              key={index} 
              className="shrink-0 rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white border border-transparent"
            >
              
              {/* 학과 헤더 (살구색 배경) */}
              <div className="bg-[#FFF4E6] px-5 py-4 border-b border-[#FFF4E6]">
                <span className="text-[15px] font-bold text-gray-800">{major.name}</span>
              </div>
              
              {/* 연락처 리스트 (흰색 배경) */}
              <div className="p-5 bg-white">
                <ContactCard contacts={major.contacts} />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 py-10 text-sm">
            등록된 연락처가 없습니다.
          </div>
        )}

      </div>
    </div>
  );
};

export default EmergencyDetail;