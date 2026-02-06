import logoImg from "../assets/logo.svg";

const Makers = () => {
  return (
    <div className="flex flex-col h-full w-full px-7 pt-10 pb-10 overflow-y-auto no-scrollbar items-center text-center">
      
      {/* 1. 로고 및 타이틀 영역 */}
      <div className="flex flex-col items-center mb-10">
        <div
          className="w-24 h-24 mb-5 bg-[#364153]"
          style={{
            maskImage: `url(${logoImg})`,
            WebkitMaskImage: `url(${logoImg})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />

        <p className="text-xs font-bold text-black mb-1">한국항공대학교</p>
        <h2 className="text-lg font-extrabold text-black mb-2">
          제52대 총학생회 청운
        </h2>
        <p className="text-xs font-medium text-black">01.15 - 02.18</p>
      </div>

      {/* 2. PM/Design 팀 */}
      <div className="w-full mb-8">
        <div className="inline-block bg-[#3F4A59] text-white px-5 py-1.5 rounded-full text-xs font-bold mb-8 shadow-md">
          PM/Design
        </div>

        <div className="grid grid-cols-2 gap-y-8 w-full max-w-[220px] mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-black mb-1">부총학생회장</span>
            <span className="text-base font-black text-black mb-0.5">주민재</span>
            <span className="text-[11px] font-medium text-black">소프트웨어 24</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-black mb-1">개발실장</span>
            <span className="text-base font-black text-black mb-0.5">윤정민</span>
            <span className="text-[11px] font-medium text-black">소프트웨어 23</span>
          </div>
        </div>
      </div>

      {/* 3. Developer 팀 */}
      <div className="w-full mb-14">
        <div className="inline-block bg-[#3F4A59] text-white px-5 py-1.5 rounded-full text-xs font-bold mb-8 shadow-md">
          Developer
        </div>

        <div className="grid grid-cols-2 gap-y-8 w-full max-w-[220px] mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-black mb-1">개발실TF</span>
            <span className="text-base font-black text-black mb-0.5">이상원</span>
            <span className="text-[11px] font-medium text-black">소프트웨어 21</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-black mb-1">개발실TF</span>
            <span className="text-base font-black text-black mb-0.5">서준익</span>
            <span className="text-[11px] font-medium text-black">소프트웨어 21</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-black mb-1">개발실장</span>
            <span className="text-base font-black text-black mb-0.5">윤정민</span>
            <span className="text-[11px] font-medium text-black">소프트웨어 23</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-black mb-1">개발실TF</span>
            <span className="text-base font-black text-black mb-0.5">신영섭</span>
            <span className="text-[11px] font-medium text-black">소프트웨어 21</span>
          </div>
        </div>
      </div>

      {/* 4. 하단 SNS 버튼 */}
      <div className="mt-auto w-full flex flex-col items-center gap-3">
        <p className="text-[11px] text-black mb-1 font-bold">
          총학생회의 더 다양한 활동이 궁금하다면?
        </p>
        
        <a
          href="https://www.instagram.com/kau_students?igsh=MXRpNmF0MzA3MHZudA=="
          target="_blank"
          rel="noreferrer"
          className="w-48 bg-[#3F4A59] text-white py-3 rounded-2xl text-xs font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center"
        >
          인스타그램 바로가기
        </a>

        <a
          href="https://www.youtube.com/@KAU_students" 
          target="_blank"
          rel="noreferrer"
          className="w-48 bg-[#3F4A59] text-white py-3 rounded-2xl text-xs font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center"
        >
          유튜브 바로가기
        </a>
      </div>

    </div>
  );
};

export default Makers;