import { useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { OnboardingProvider } from "../contexts/OnboardingContext";

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
    return localStorage.getItem("kau_chungwoon_onboarding_seen") !== "true";
  });

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const isHome = location.pathname === "/";
  const isHomeOnboarding = isHome && isOnboardingActive;

  const shouldShowFooter =
    location.pathname === "/makers" ||
    (isHome && !isOnboardingActive);

  return (
    <OnboardingProvider value={{ isOnboardingActive, setOnboardingActive }}>
      <div className="flex h-dvh flex-col bg-[#f0f8ff]">
        <Header onOpenSidebar={openSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className="relative flex flex-1 flex-col overflow-hidden">
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
              <div className="flex-1 overflow-y-auto">
                <div className="flex min-h-full flex-col">
                  <div className="flex-1">{children}</div>
                  {shouldShowFooter && <Footer />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </OnboardingProvider>
  );
};

export default Layout;