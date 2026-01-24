import emblemImg from "./assets/logo.svg";

const menuItems = [
  {
    label: "공지",
    icon: "https://www.figma.com/api/mcp/asset/913fcb4b-c851-4372-b537-574994a1ffb1",
    iconBg:
      "linear-gradient(141.63251461513846deg, rgba(194, 122, 255, 1) 0%, rgba(152, 16, 250, 1) 100%)",
  },
  {
    label: "타임테이블",
    icon: "https://www.figma.com/api/mcp/asset/bfdc2be4-7fec-40cc-b428-e26bc91f7c4d",
    iconBg:
      "linear-gradient(141.63251461513846deg, rgba(251, 100, 182, 1) 0%, rgba(230, 0, 118, 1) 100%)",
  },
  {
    label: "공연",
    icon: "https://www.figma.com/api/mcp/asset/02ca2c78-5e24-4204-afb4-9d13d4c1ba82",
    iconBg:
      "linear-gradient(141.63251461513846deg, rgba(255, 137, 4, 1) 0%, rgba(245, 73, 0, 1) 100%)",
  },
  {
    label: "동아리",
    icon: "https://www.figma.com/api/mcp/asset/e219ba58-1774-4340-b707-60cfd7129010",
    iconBg:
      "linear-gradient(141.63251461513846deg, rgba(81, 162, 255, 1) 0%, rgba(21, 93, 252, 1) 100%)",
  },
  {
    label: "긴급연락",
    icon: "https://www.figma.com/api/mcp/asset/ff912329-dceb-4225-b050-b4a738804069",
    iconBg:
      "linear-gradient(141.63251461513846deg, rgba(255, 100, 103, 1) 0%, rgba(231, 0, 11, 1) 100%)",
  },
  {
    label: "만든이",
    icon: "https://www.figma.com/api/mcp/asset/63abd2b1-25f3-454a-b638-8c2f9c549b0a",
    iconBg:
      "linear-gradient(141.63251461513846deg, rgba(5, 223, 114, 1) 0%, rgba(0, 166, 62, 1) 100%)",
  },
];

function App() {
  return (
    <main className="flex-1 pb-[80px] pt-[70px]">
      <div className="mx-auto flex max-w-[402px] flex-col items-center px-[17px] text-center">
        <img
          src={emblemImg}
          alt="청운 엠블럼"
          className="h-[143px] w-[212px] object-contain"
        />
        <p className="mt-[6px] font-['Pretendard_Variable',sans-serif] text-[20px] font-medium leading-[50px] text-black">
          제52대 총학생회 청운
        </p>
        <p className="mt-[4px] font-['Pretendard_Variable',sans-serif] text-[20px] font-medium leading-[50px] text-black">
          2026학년도 새내기배움터
        </p>
      </div>

      <div className="mx-auto mt-[48px] grid max-w-[402px] grid-cols-3 gap-x-[13.316px] gap-y-[12.296px] px-[17px]">
        {menuItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="flex h-[99.354px] w-[113.694px] flex-col items-center justify-center gap-[12px] rounded-[24px] border border-white/50 bg-[linear-gradient(138.8506387257116deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.2)_100%)] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          >
            <span
              className="flex h-[38px] w-[48px] items-center justify-center rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
              style={{ backgroundImage: item.iconBg }}
            >
              <img src={item.icon} alt="" className="h-[24px] w-[24px]" />
            </span>
            <span className="font-['Inter','Noto_Sans_KR',sans-serif] text-[14px] font-medium leading-[20px] tracking-[-0.1504px] text-[#101828]">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </main>
  );
}

export default App;