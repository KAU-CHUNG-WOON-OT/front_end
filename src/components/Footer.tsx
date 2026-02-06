import { FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="h-[120px] w-full bg-[#d6f0ff]">
      <div className="mx-auto flex h-full max-w-[402px] flex-col items-center justify-between pl-[32px] pr-[32px] py-[16px] text-center min-[402px]:pl-[72px] min-[402px]:pr-[72px]">
        <p className="font-['Pretendard_Variable',sans-serif] text-[11px] font-medium leading-[22px] text-[#4a5565]">
          한국항공대학교 제52대 총학생회 청운
        </p>

        <div className="flex items-center gap-[20px] text-[#4a5565]">
          <a
            href="https://www.youtube.com/@kau_students"
            target="_blank"
            rel="noreferrer"
            aria-label="유튜브"
            className="inline-flex h-[24px] w-[24px] items-center justify-center"
          >
            <FiYoutube size={24} />
          </a>
          <a
            href="https://www.instagram.com/kau_students?igsh=MXRpNmF0MzA3MHZudA=="
            target="_blank"
            rel="noreferrer"
            aria-label="인스타그램"
            className="inline-flex h-[24px] w-[24px] items-center justify-center"
          >
            <FiInstagram size={24} />
          </a>
        </div>

        <p className="whitespace-nowrap font-['Pretendard_Variable',sans-serif] text-[11px] font-medium leading-[22px] text-[#4a5565]">
          Copyright©2026. Kau_Students. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
