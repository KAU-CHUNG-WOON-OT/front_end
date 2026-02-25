import { useMemo, useState, useRef } from "react";
import emblemRectangle from "../assets/emblem_rectangle.svg";
import { notices, type NoticeCategory } from "../data/notice";

const filterOptions: NoticeCategory[] = ["전체", "장소", "흡연", "음주", "기타"];

const Notice = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<NoticeCategory>("전체");
  const [selectedNoticeId, setSelectedNoticeId] = useState<number | null>(null);

  const visibleNotices = useMemo(() => {
    if (selectedFilter === "전체") {
      return notices;
    }
    return notices.filter((notice) => notice.category === selectedFilter);
  }, [selectedFilter]);

  const activeNotice = useMemo(() => {
    if (selectedNoticeId === null) {
      return null;
    }
    return notices.find((notice) => notice.id === selectedNoticeId) ?? null;
  }, [selectedNoticeId]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-none pt-[8px] pb-[4px] mb-2">
        <div className="mx-auto flex max-w-[402px] justify-start gap-[10px] px-6">
          {filterOptions.map((option) => {
            const isActive = option === selectedFilter;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setSelectedFilter(option);
                  scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`h-[35px] w-[60px] rounded-[25px] text-[14px] font-bold leading-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors ${
                  isActive
                    ? "bg-[#252b4f] text-white"
                    : "bg-white text-[#252b4f]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto no-scrollbar relative"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)",
        }}
      >
        <div className="mx-auto flex max-w-[402px] flex-col gap-[18px] px-6 pb-[80px] pt-[12px]">
          {visibleNotices.map((notice) => (
            <button
              key={notice.id}
              type="button"
              onClick={() => setSelectedNoticeId(notice.id)}
              className="flex min-h-[85px] w-full items-center gap-[14px] rounded-[20px] bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(214,235,255,0.65)_100%)] px-[18px] py-[14px] text-left shadow-[0px_6px_10px_0px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-px"
            >
              <img
                src={emblemRectangle}
                alt="공지 아이콘"
                className="h-[52px] w-[52px]"
              />
              <div className="flex flex-1 items-center justify-between gap-[12px]">
                <span className="text-[15px] font-semibold leading-[22px] text-[#3a3f4b]">
                  {notice.title}
                </span>
                <span className="text-[13px] font-medium text-[#8a94a6]">
                  {notice.date}
                </span>
              </div>
            </button>
          ))}
          {visibleNotices.length === 0 && (
            <div className="rounded-[16px] bg-white/70 px-6 py-8 text-center text-[14px] text-[#6a7282] shadow-[0px_4px_10px_rgba(0,0,0,0.08)]">
              등록된 공지가 없습니다.
            </div>
          )}
        </div>
      </div>

      {activeNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(149,149,149,0.5)] px-[16px] py-[24px]">
          <button
            type="button"
            aria-label="공지 닫기"
            className="absolute inset-0"
            onClick={() => setSelectedNoticeId(null)}
          />
          <div className="relative z-10 flex h-[min(600px,calc(100dvh-72px))] w-full max-w-[352px] flex-col rounded-[25px] border border-white/50 bg-white/90 p-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[20px]">
            <div className="shrink-0 rounded-[14px] bg-[linear-gradient(90deg,#afe6ff_0%,#ffffff_100%)] px-[16px] py-[12px]">
              <div className="flex items-center gap-[12px]">
                <img
                  src={emblemRectangle}
                  alt=""
                  className="h-[40px] w-[40px]"
                />
                <div className="flex flex-col">
                  <span className="text-[15px] font-medium leading-[22px] text-[#767676]">
                    {activeNotice.title}
                  </span>
                  <span className="text-[13px] leading-[20px] text-[#767676]/90">
                    {activeNotice.dateTime ?? activeNotice.date}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-[18px] flex-1 overflow-y-auto whitespace-pre-wrap wrap-break-word px-[4px] text-[15px] leading-[24px] text-[#1c1c1c]">
              {activeNotice.image && (
                <img
                  src={activeNotice.image}
                  alt={`${activeNotice.title} 이미지`}
                  className="mb-[14px] max-h-[58dvh] w-full rounded-[12px] object-contain"
                />
              )}
              {activeNotice.content}
            </div>
          </div>

          <button
            type="button"
            aria-label="닫기"
            onClick={() => setSelectedNoticeId(null)}
            className="absolute bottom-[24px] left-1/2 z-10 flex h-[37px] w-[37px] -translate-x-1/2 items-center justify-center rounded-full border border-[#e5e7eb] bg-white/90 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px] text-[#1f2937]"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Notice;
