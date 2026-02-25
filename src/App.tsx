import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useOnboarding } from "./contexts/OnboardingContext";
import info_icon from "./assets/info_icon.svg";
import timetable_icon from "./assets/table_icon.svg";
import club_icon from "./assets/people_icon.svg";
import emergency_icon from "./assets/phone_icon.svg";
import notice_icon from "./assets/notice_icon.svg";
import building_icon from "./assets/building_icon.svg";


const menuItems = [
  {
    label: "공지",
    path: "/notice",
    icon: notice_icon,
  },
  {
    label: "타임테이블",
    path: "/timetable",
    icon: timetable_icon,
  },
  {
    label: "동아리",
    path: "/club",
    icon: club_icon,
  },
  {
    label: "리조트",
    path: "/resort",
    icon: building_icon,
  },
  {
    label: "긴급연락",
    path: "/emergency",
    icon: emergency_icon,
  },
  {
    label: "만든이",
    path: "/makers",
    icon: info_icon,
  },
];

const ONBOARDING_SCROLL_DURATION = 720;

const ChungwoonEmblem = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 242 169"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="청운 엠블럼"
      role="img"
    >
      <path d="M191.435 74.9388C195.514 74.9388 199.686 74.2138 203.757 72.6777C212.066 69.5481 218.764 63.5544 222.614 55.7878C226.564 47.8202 227.072 38.9624 224.038 30.8441C221.004 22.7257 214.814 16.3875 206.606 12.9923C198.612 9.68318 189.631 9.58269 181.323 12.7123C163.955 19.2515 154.859 38.0149 161.042 54.5532C165.78 67.2081 178.11 74.946 191.427 74.9388H191.435ZM187.277 28.6261C189.381 27.8365 191.556 27.4417 193.703 27.4417C195.85 27.4417 198.104 27.8652 200.144 28.7122C203.951 30.2914 206.806 33.1698 208.166 36.8162C209.532 40.4698 209.275 44.5183 207.436 48.215C205.496 52.1198 202.076 55.1561 197.796 56.764C189.18 60.0085 179.806 56.3333 176.908 48.581C174.009 40.8216 178.654 31.8705 187.277 28.6332V28.6261Z" />
      <path d="M82.7181 107.025C74.7247 103.716 65.7437 103.615 57.4354 106.745C40.0674 113.277 30.9719 132.047 37.1548 148.578C40.189 156.697 46.3791 163.035 54.5872 166.43C58.702 168.131 63.0816 168.986 67.4898 168.986C71.6475 168.986 75.8339 168.225 79.8699 166.71C97.2379 160.178 106.333 141.408 100.151 124.877C97.1163 116.758 90.9262 110.42 82.7181 107.025ZM73.916 150.796C69.6366 152.404 65.0638 152.376 61.0492 150.717C57.2421 149.138 54.3868 146.26 53.0272 142.613C50.1289 134.854 54.7733 125.903 63.3964 122.666C65.5004 121.876 67.6758 121.481 69.8155 121.481C71.9552 121.481 74.2166 121.905 76.2561 122.752C80.0632 124.331 82.9185 127.209 84.2781 130.856C87.1764 138.615 82.532 147.566 73.9089 150.804L73.916 150.796Z" />
      <path d="M232.382 138.307C231.989 137.833 231.294 137.754 230.815 138.142C225.298 142.506 205.575 156.359 184.035 150.595C178.969 149.239 174.145 146.899 169.68 143.626C169.186 143.267 168.492 143.367 168.127 143.855L159.196 155.556C158.81 156.058 158.917 156.783 159.425 157.163C165.658 161.779 172.464 165.088 179.663 167.019C184.615 168.347 189.653 169.007 194.769 169.007C203.621 169.007 212.695 167.026 221.884 163.064C231.23 159.037 238.286 153.897 241.571 151.277C242.064 150.883 242.136 150.158 241.735 149.67L232.375 138.314L232.382 138.307Z" />
      <path d="M203.965 99.7605C204.509 99.4303 205.224 99.6242 205.539 100.177C207.743 104.089 209.339 108.331 210.241 112.688C211.221 117.433 211.4 122.278 210.763 127.102C210.685 127.705 211.107 128.265 211.708 128.358L226.221 130.633C226.85 130.734 227.43 130.289 227.516 129.657C228.446 122.824 228.217 115.961 226.829 109.236C225.584 103.199 223.365 97.3128 220.324 91.8934C220.009 91.3335 220.231 90.6301 220.796 90.3358C225.162 88.0818 229.598 85.9356 234.1 83.897C234.665 83.6386 234.923 82.9711 234.665 82.404L228.675 68.9523C228.418 68.3781 227.745 68.1197 227.18 68.3781C200.029 80.6597 175.169 96.6668 153.271 115.969C148.004 120.606 143.281 125.113 139.109 129.083C137.248 130.856 135.151 132.859 133.097 134.746C132.289 135.493 131.001 134.761 131.223 133.684C131.251 133.533 131.287 133.383 131.316 133.232C132.826 125.953 135.359 116.019 138.572 103.436C139.373 100.299 140.218 96.9898 141.098 93.5013C150.186 57.6254 155.117 36.4788 157.085 24.9509C158.781 15.0093 159.497 7.61591 153.271 2.96453C144.211 -3.79719 130.879 2.84251 126.492 5.02463C118.12 9.19508 107.872 16.0286 96.0214 25.3385C90.5398 29.6453 84.8506 34.3757 79.0756 39.4147C78.2455 40.1397 76.9932 39.3788 77.2365 38.3021C78.1596 34.1962 78.131 29.3941 74.6245 25.6472C72.4919 23.3645 68.4559 20.9527 61.3713 22.4386C57.8146 23.1851 53.4494 24.8863 48.025 27.6283C37.3838 33.0119 22.685 42.3792 3.10576 56.2472C2.59768 56.6061 2.47602 57.3167 2.83383 57.8264L11.321 69.8496C11.6788 70.3592 12.3873 70.4813 12.8954 70.1224C28.4744 59.0825 41.1408 50.8134 50.5511 45.5375C51.8822 44.791 53.0987 44.1306 54.2151 43.542C55.2169 43.0181 56.2832 44.1306 55.7179 45.114C53.5639 48.8251 50.4939 53.6846 46.1286 59.9941C37.3981 72.606 26.5064 86.675 18.5559 96.9539C14.7846 101.828 11.5286 106.034 9.27438 109.085C7.97911 110.836 7.08459 112.114 6.45485 113.097C5.95392 113.887 5.58895 114.54 5.30271 115.157C3.28467 119.579 5.02362 123.671 7.63562 125.774C10.0401 127.705 14.3338 128.853 18.5058 125.731C19.064 125.314 19.658 124.798 20.3736 124.108C21.3182 123.197 22.5562 121.898 24.1664 120.132C27.0002 117.024 30.5711 112.939 34.3424 108.611C37.1119 105.438 39.9815 102.158 42.4504 99.3801C52.104 88.5628 63.053 77.3507 74.1808 66.8205C74.6173 66.4041 75.3043 66.4041 75.7337 66.8205C76.6282 67.689 77.5084 68.6509 78.3457 69.7348C79.92 71.7661 81.201 74.0129 82.1671 76.4247C82.3961 76.9918 83.0258 77.2717 83.5911 77.0707L97.424 72.0963C98.0251 71.881 98.3257 71.2134 98.0967 70.6177C96.5223 66.5405 94.3826 62.7433 91.7277 59.3194C90.6829 57.9699 89.5522 56.6779 88.35 55.4576C87.8991 54.9982 87.9278 54.2445 88.4144 53.8138C93.3164 49.4927 98.1611 45.394 102.848 41.6112C122.864 25.4534 133.877 19.8688 139.345 17.9595C140.146 17.6795 140.962 18.3471 140.84 19.1869C140.468 21.7423 139.824 25.4247 138.722 30.7292C136.203 42.8171 131.745 61.4298 124.682 89.3165C123.802 92.7978 122.957 96.0997 122.163 99.2294C118.062 115.33 115.093 126.965 113.719 135.134C112.91 139.95 112.652 143.539 112.917 146.432C113.504 152.785 116.681 155.843 119.243 157.293C121.168 158.376 123.107 158.8 124.961 158.8C130.278 158.8 134.929 155.319 136.783 153.94C140.783 150.947 145.42 146.533 150.788 141.422C154.845 137.553 159.446 133.174 164.463 128.753C176.693 117.978 189.903 108.295 203.972 99.7749L203.965 99.7605Z" />
      <path d="M26.4206 31.1599C31.5802 27.7432 36.89 24.4126 42.2142 21.2542C42.7509 20.9384 42.9298 20.2421 42.615 19.7038L35.1797 6.99861C34.8648 6.46025 34.1707 6.27362 33.6268 6.59663C28.045 9.90571 22.4847 13.3942 17.0746 16.9833C11.457 20.7087 5.87522 24.6207 0.458 28.6332C-0.042932 29.0065 -0.150274 29.7171 0.221846 30.2196L8.98099 42.0418C9.35311 42.5443 10.0544 42.6448 10.5553 42.2787C15.7221 38.4528 21.0534 34.7131 26.4134 31.1599H26.4206Z" />
    </svg>
  );
};

function App() {
  const ONBOARDING_KEY = "kau_chungwoon_onboarding_seen";
  const { isOnboardingActive: showOnboarding, setOnboardingActive: setShowOnboarding } =
    useOnboarding();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);
  const scrollAnimationFrame = useRef<number | null>(null);
  const transitionEndTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!showOnboarding) {
      return;
    }

    // 탭 단위(세션)로 온보딩 노출 여부를 유지
    sessionStorage.setItem(ONBOARDING_KEY, "true");
  }, [showOnboarding]);

  useEffect(() => {
    return () => {
      if (scrollAnimationFrame.current !== null) {
        window.cancelAnimationFrame(scrollAnimationFrame.current);
      }
      if (transitionEndTimer.current !== null) {
        window.clearTimeout(transitionEndTimer.current);
      }
    };
  }, []);

  const animateOnboardingScroll = (el: HTMLDivElement) => {
    if (scrollAnimationFrame.current !== null) {
      window.cancelAnimationFrame(scrollAnimationFrame.current);
    }

    const startTop = el.scrollTop;
    const targetTop = el.clientHeight;
    const distance = targetTop - startTop;

    if (Math.abs(distance) < 1) {
      el.scrollTop = targetTop;
      return;
    }

    const startTime = performance.now();
    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / ONBOARDING_SCROLL_DURATION, 1);
      const easedProgress = easeInOutCubic(progress);
      el.scrollTop = startTop + distance * easedProgress;

      if (progress < 1) {
        scrollAnimationFrame.current = window.requestAnimationFrame(tick);
        return;
      }

      scrollAnimationFrame.current = null;
    };

    scrollAnimationFrame.current = window.requestAnimationFrame(tick);
  };

  const goToHome = () => {
    const el = scrollRef.current;
    if (!el || isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    animateOnboardingScroll(el);

    if (transitionEndTimer.current !== null) {
      window.clearTimeout(transitionEndTimer.current);
    }

    transitionEndTimer.current = window.setTimeout(() => {
      setIsTransitioning(false);
      setShowOnboarding(false);
      transitionEndTimer.current = null;
    }, ONBOARDING_SCROLL_DURATION + 120);
  };

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (!showOnboarding) {
      return;
    }
    if (e.deltaY <= 0) {
      return;
    }
    // 온보딩 최상단에서만 트리거
    if ((scrollRef.current?.scrollTop ?? 0) < 10) {
      e.preventDefault();
      goToHome();
    }
  };

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartY.current = e.touches[0]?.clientY ?? null;
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (!showOnboarding) {
      return;
    }
    const startY = touchStartY.current;
    const currentY = e.touches[0]?.clientY ?? null;
    if (startY === null || currentY === null) {
      return;
    }

    const delta = startY - currentY; // 위로 스와이프(=아래로 스크롤)면 양수
    if (delta > 24 && (scrollRef.current?.scrollTop ?? 0) < 10) {
      goToHome();
      touchStartY.current = null;
    }
  };

  return (
    <>
      {showOnboarding ? (
        <div
          ref={scrollRef}
          className={`no-scrollbar flex-1 snap-y snap-mandatory overflow-y-auto overscroll-contain ${isTransitioning ? "pointer-events-none" : ""}`}
          onWheelCapture={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Onboarding */}
          <section className="relative mx-auto flex min-h-full max-w-[402px] snap-start flex-col items-center justify-center px-[17px]">
            <div
              className={`flex flex-col items-center transition-[opacity,transform] duration-400 ${
                isTransitioning
                  ? "pointer-events-none -translate-y-3 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <ChungwoonEmblem className="h-[169px] w-[242px] object-contain text-[#364153]" />
              <p className="mt-[14px] font-['Pretendard_Variable',sans-serif] text-[20px] font-medium leading-[34px] text-black">
                제52대 총학생회 청운
              </p>
            </div>

            <div
              className={`absolute bottom-[24px] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="text-[12px] font-medium tracking-[0.1px] text-[#4b5565]">
                아래로 스와이프해 홈으로 이동
              </p>
              <div className="mt-[6px] flex flex-col items-center text-[#4b5565]">
                <svg
                  viewBox="0 0 20 20"
                  className="onboarding-chevron h-[14px] w-[14px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  viewBox="0 0 20 20"
                  className="onboarding-chevron h-[14px] w-[14px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </section>

          {/* Home */}
          <section className="snap-start pb-[80px] pt-[70px]">
            <div className="mx-auto flex max-w-[402px] flex-col items-center px-[17px] text-center">
              <ChungwoonEmblem className="h-[143px] w-[212px] object-contain text-[#364153]" />
              <p className="mt-[6px] font-['Pretendard_Variable',sans-serif] text-[20px] font-medium leading-[50px] text-black">
                제52대 총학생회 청운
              </p>
              <p className="mt-[4px] font-['Pretendard_Variable',sans-serif] text-[20px] font-medium leading-[50px] text-black">
                2026학년도 새내기배움터
              </p>
            </div>

            <div className="mx-auto mt-[80px] grid max-w-[402px] grid-cols-3 gap-x-[13.316px] gap-y-[12.296px] px-[17px]">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex h-[99.354px] w-[113.694px] flex-col items-center justify-center gap-[12px] rounded-[24px] border border-white/50 bg-[linear-gradient(138.8506387257116deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.2)_100%)] p-px shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-start focus-visible:ring-offset-2"
                  aria-label={`${item.label} 페이지로 이동`}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="h-[36px] w-[36px]"
                    aria-hidden="true"
                  />
                  <span className="font-['Inter','Noto_Sans_KR',sans-serif] text-[14px] font-medium leading-[20px] tracking-[-0.1504px] text-[#101828]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <main className="flex-1 pb-[80px] pt-[70px]">
          <div className="mx-auto flex max-w-[402px] flex-col items-center px-[17px] text-center">
            <ChungwoonEmblem className="h-[143px] w-[212px] object-contain text-[#364153]" />
            <p className="mt-[6px] font-['Pretendard_Variable',sans-serif] text-[20px] font-medium leading-[50px] text-black">
              제52대 총학생회 청운
            </p>
            <p className="mt-[4px] font-['Pretendard_Variable',sans-serif] text-[20px] font-medium leading-[50px] text-black">
              2026학년도 새내기배움터
            </p>
          </div>

          <div className="mx-auto mt-[80px] grid max-w-[402px] grid-cols-3 gap-x-[13.316px] gap-y-[12.296px] px-[17px]">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex h-[99.354px] w-[113.694px] flex-col items-center justify-center gap-[12px] rounded-[24px] border border-white/50 bg-[linear-gradient(138.8506387257116deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.2)_100%)] p-px shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-start focus-visible:ring-offset-2"
                aria-label={`${item.label} 페이지로 이동`}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-[36px] w-[36px]"
                  aria-hidden="true"
                />
                <span className="font-['Inter','Noto_Sans_KR',sans-serif] text-[14px] font-medium leading-[20px] tracking-[-0.1504px] text-[#101828]">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default App;