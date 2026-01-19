import logoImg from "../assets/logo.svg";

const Makers = () => {
  return (
    <div className="flex flex-col h-full w-full px-7 pt-10 pb-10 overflow-y-auto no-scrollbar items-center text-center">
      <div className="flex flex-col items-center mb-10">
        <div
          className="w-28 h-28 mb-5 bg-[#364153]"
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

        <p className="text-xs font-bold text-gray-500 mb-1">한국항공대학교</p>
        <h2 className="text-lg font-extrabold text-[#2F3E4E] mb-3">
          제52대 총학생회 청운
        </h2>
        <p className="text-xs font-medium text-gray-400">01.15 - 02.18</p>
      </div>

      <div className="w-full mb-5">
      
        <div className="inline-block bg-[#3F4A59] text-white px-2 py-1.5 rounded-full text-sm mb-7 shadow-md">
          PM/Design
        </div>

        <div className="grid grid-cols-2 gap-y-6 w-full max-w-[200px] mx-auto">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold mb-1.5">
              소프트웨어 24
            </span>
            <span className="text-sm font-black text-[#2F3E4E]">주민재</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold mb-1.5">
              소프트웨어 23
            </span>
            <span className="text-sm font-black text-[#2F3E4E]">윤정민</span>
          </div>
        </div>
      </div>

      <div className="w-full mb-16">
        <div className="inline-block bg-[#3F4A59] text-white px-2 py-1.5 rounded-full text-sm mb-7 shadow-md">
          Developer
        </div>

        <div className="grid grid-cols-2 gap-y-8 w-full max-w-[200px] mx-auto">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold mb-1.5">
              소프트웨어 21
            </span>
            <span className="text-sm font-black text-[#2F3E4E]">이상원</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold mb-1.5">
              소프트웨어 21
            </span>
            <span className="text-sm font-black text-[#2F3E4E]">서준익</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold mb-1.5">
              소프트웨어 23
            </span>
            <span className="text-sm font-black text-[#2F3E4E]">윤정민</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold mb-1.5">
              소프트웨어 21
            </span>
            <span className="text-sm font-black text-[#2F3E4E]">신영섭</span>
          </div>
        </div>
      </div>

      <div className="mt-auto w-full">
        <p className="text-xs text-gray-600 mb-4 font-bold">
          총학생회의 더 다양한 활동이 궁금하다면?
        </p>
        <a
          href="https://www.instagram.com/kau_students?igsh=MXRpNmF0MzA3MHZudA=="
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#3F4A59] text-white px-8 py-3.5 rounded-2xl text-sm font-bold shadow-lg active:scale-95 transition-transform"
        >
          인스타그램 바로가기
        </a>
      </div>
    </div>
  );
};

export default Makers;