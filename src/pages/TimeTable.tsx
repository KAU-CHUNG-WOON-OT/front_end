import { useMemo, useState, useRef } from "react";
import { daySchedules } from "../data/Timetable";

const filterOptions = [
  { id: "all", label: "전체" },
  { id: "day1", label: "Day1" },
  { id: "day2", label: "Day2" },
  { id: "day3", label: "Day3" },
] as const;

const TimeTable = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedDay, setSelectedDay] =
    useState<(typeof filterOptions)[number]["id"]>("all");
  const [selectedItem, setSelectedItem] = useState<{
    dayId: (typeof filterOptions)[number]["id"];
    itemIndex: number;
  } | null>(null);

  const visibleDays = useMemo(() => {
    if (selectedDay === "all") {
      return daySchedules;
    }
    return daySchedules.filter((day) => day.id === selectedDay);
  }, [selectedDay]);

  const activeDetail = useMemo(() => {
    if (!selectedItem) {
      return null;
    }
    const day = daySchedules.find((entry) => entry.id === selectedItem.dayId);
    if (!day) {
      return null;
    }
    const item = day.items[selectedItem.itemIndex];
    if (!item) {
      return null;
    }
    return { day, item };
  }, [selectedItem]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-none pb-4 pt-[8px]">
        <div className="mx-auto flex max-w-[402px] gap-[10px] px-[17px] text-black">
          {filterOptions.map((option) => {
            const isActive = option.id === selectedDay;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setSelectedDay(option.id);
                  scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`h-[35px] w-[60px] rounded-[25px] text-[14px] font-bold leading-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors ${
                  isActive
                    ? "bg-[#252b4f] text-white"
                    : "bg-white text-[#252b4f]"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto relative no-scrollbar"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20px, black 100%)",
        }}
      >
        <div className="mx-auto flex max-w-[402px] flex-col gap-[20px] px-[17px] pb-[80px] pt-2 text-black">
          <div className="rounded-[16px] bg-[linear-gradient(152.3135854113913deg,rgba(255,255,255,0.665)_0%,rgba(255,255,255,0.19)_100.01%)] px-[24px] pb-[24px] pt-[24px] shadow-[0px_8px_10px_0px_rgba(0,0,0,0.1)] backdrop-blur-[20px]">
            <div className="flex flex-col gap-[16px]">
              {visibleDays.map((day) => (
                <div key={day.id} className="flex flex-col gap-[12px]">
                  <div
                    className="rounded-[14px] px-[16px] py-[16px]"
                    style={{
                      background:
                        day.id === "day1"
                          ? "linear-gradient(90deg, #63C3EB 0%, #0B7DFF 100%)"
                          : day.id === "day2"
                            ? "linear-gradient(90deg, #FFD1DC 0%, #FF61B2 100%)"
                            : "linear-gradient(90deg, rgba(164, 231, 255, 0.37) 0.114%, #A4BBFF 100%)",
                    }}
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="flex h-[24px] w-[24px] items-center justify-center text-white">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-[24px] w-[24px]"
                          aria-hidden="true"
                        >
                          <path
                            d="M7 3V7M17 3V7M4 9H20M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[16px] font-normal leading-[24px] tracking-[-0.3125px] text-white">
                          {day.label.toUpperCase()}
                        </span>
                        <span className="text-[14px] font-normal leading-[20px] tracking-[-0.1504px] text-white/90">
                          {day.dateLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[12px]">
                    {day.items.length === 0 ? (
                      <div className="rounded-[10px] bg-white/60 px-[16px] py-[16px] text-[14px] text-[#6a7282]">
                        일정이 아직 등록되지 않았어요.
                      </div>
                    ) : (
                      day.items.map((item, itemIndex) => (
                        <button
                          key={`${day.id}-${item.time}-${item.title}`}
                          type="button"
                          onClick={() =>
                            setSelectedItem({ dayId: day.id, itemIndex })
                          }
                          className="flex w-full items-start gap-[16px] rounded-[10px] px-[12px] py-[12px] text-left transition-colors hover:bg-white/30"
                        >
                          <div className="w-[52px] text-[16px] font-normal leading-[24px] tracking-[-0.3125px] text-[#0b7dff]">
                            {item.time}
                          </div>
                          <div className="flex flex-1 flex-col">
                            <span className="text-[16px] font-normal leading-[24px] tracking-[-0.3125px] text-[#101828]">
                              {item.title}
                            </span>
                            <span className="text-[14px] font-normal leading-[20px] tracking-[-0.1504px] text-[#6a7282]">
                              {item.location}
                            </span>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(149,149,149,0.5)] p-[20px]">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="상세 닫기"
            onClick={() => setSelectedItem(null)}
          />
          <div
            className="relative z-10 h-[543px] w-full max-w-[360px] overflow-hidden rounded-[16px] border border-[rgba(229,231,235,0.5)] bg-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative z-10 flex h-[142px] flex-col gap-[4px] px-[16px] py-[16px]"
              style={{
                background:
                  activeDetail.day.id === "day1"
                    ? "linear-gradient(90deg, #63C3EB 0%, #0B7DFF 100%)"
                    : activeDetail.day.id === "day2"
                      ? "linear-gradient(90deg, #FFD1DC 0%, #FF61B2 100%)"
                      : "linear-gradient(90deg, rgba(164, 231, 255, 0.37) 0.114%, #A4BBFF 100%)",
              }}
            >
              <div className="flex items-center gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 3V7M17 3V7M4 9H20M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-[16px] font-normal leading-[24px] tracking-[-0.3125px]">
                    {activeDetail.day.label.toUpperCase()}
                  </span>
                  <span className="text-[14px] font-normal leading-[20px] tracking-[-0.1504px] text-white/90">
                    {activeDetail.day.dateLabel}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] text-white">
                <span className="text-[14px] font-normal leading-[20px] tracking-[-0.1504px] text-white/90">
                  {activeDetail.item.time}
                </span>
                <span className="text-[20px] font-medium leading-[30px] tracking-[-0.4492px]">
                  {activeDetail.item.title}
                </span>
              </div>
            </div>

            <div className="-mt-px flex h-[401px] flex-col gap-[16px] overflow-y-auto px-[24px] py-[20px] text-[#364153]">
              <div className="flex items-center gap-[8px] text-[#4a5565]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px]"
                  aria-hidden="true"
                >
                  <path
                    d="M12 13.5C13.3807 13.5 14.5 12.3807 14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 21C15.5 17.5 18 14.4625 18 11C18 7.68629 15.3137 5 12 5C8.68629 5 6 7.68629 6 11C6 14.4625 8.5 17.5 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
                <span className="text-[16px] font-normal leading-[24px] tracking-[-0.3125px]">
                  {activeDetail.item.location}
                </span>
              </div>

              <div className="text-[16px] leading-[26px] tracking-[-0.3125px]">
                {activeDetail.item.detail ? (
                  <p>{activeDetail.item.detail}</p>
                ) : (
                  <p className="text-[#6a7282]">
                    상세 내용이 아직 등록되지 않았어요.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeTable;