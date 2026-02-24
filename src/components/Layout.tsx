import { useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { OnboardingProvider } from "../contexts/OnboardingContext";

const ONBOARDING_KEY = "kau_chungwoon_onboarding_seen";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const [isOnboardingActive, setOnboardingActive] = useState(() => {
    if (location.pathname !== "/") {
      return false;
    }
    return sessionStorage.getItem(ONBOARDING_KEY) !== "true";
  });

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const isHome = location.pathname === "/";
  const isHomeOnboarding = isHome && isOnboardingActive;

  // Footer가 필요한 페이지인지 확인 (Club, Notice 등은 Footer가 없으므로 false)
  const shouldShowFooter =
    location.pathname === "/makers" ||
    (isHome && !isOnboardingActive);

  return (
    <OnboardingProvider value={{ isOnboardingActive, setOnboardingActive }}>
      <div className="flex h-dvh flex-col bg-[#f0f8ff]">
        <Header onOpenSidebar={openSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className="relative flex flex-1 flex-col overflow-hidden">
          {/* 배경 그라데이션 원 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[60%] top-[5%] w-[60vw] aspect-square rounded-full bg-[#87CEEB] opacity-60 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-10%] top-[55%] w-[60vw] aspect-square rounded-full bg-[#FFD1DC] opacity-60 blur-3xl"
          />

          <div className="relative z-10 flex h-full flex-1 flex-col overflow-hidden">
            {isHomeOnboarding ? (
              children
            ) : (
              <div 
                className={`flex-1 ${shouldShowFooter ? "overflow-y-auto" : "overflow-hidden flex flex-col"}`}
              >
                {shouldShowFooter ? (
                  <div className="flex min-h-full flex-col">
                    <div className="flex-1">{children}</div>
                    <Footer />
                  </div>
                ) : (
                  children
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </OnboardingProvider>
  );
};

export default Layout;