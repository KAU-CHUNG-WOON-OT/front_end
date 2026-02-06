import { useParams, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import ContactCard from "../components/emergency/ContactCard";
import { colleges } from "../data/emergency";

const EmergencyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const college = colleges.find((c) => c.id === id);

  if (!college)
    return <div className="p-10 text-center">정보를 찾을 수 없습니다.</div>;

  return (
    <div className="flex flex-col h-full w-full">
      {/* 1. 상단 고정 영역 (flex-none) */}
      <div className="flex-none relative flex items-center justify-center px-6 pt-6 pb-4 z-10">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-6 p-1 -ml-2 cursor-pointer text-black"
        >
          <FiChevronLeft className="text-2xl" />
        </button>

        <h2 className="text-lg font-bold text-gray-900">{college.name}</h2>
      </div>

      {/* 2. 스크롤 영역 (flex-1) */}
      <div
        className="flex-1 overflow-y-auto relative no-scrollbar"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
        }}
      >
        <div className="flex flex-col gap-6 px-6 pb-24 pt-2">
          {college.majors.length > 0 ? (
            college.majors.map((major, index) => (
              <div
                key={index}
                className="shrink-0 rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white border border-transparent"
              >
                <div className="bg-[#FFF4E6] px-5 py-4 border-b border-[#FFF4E6]">
                  <span className="text-[15px] font-bold text-gray-800">
                    {major.name}
                  </span>
                </div>
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
    </div>
  );
};

export default EmergencyDetail;
