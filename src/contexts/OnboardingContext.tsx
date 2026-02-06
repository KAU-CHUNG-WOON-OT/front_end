import { createContext, useContext } from "react";

type OnboardingContextValue = {
  isOnboardingActive: boolean;
  setOnboardingActive: (active: boolean) => void;
};

const OnboardingContext = createContext<OnboardingContextValue | undefined>(
  undefined,
);

export const OnboardingProvider = OnboardingContext.Provider;

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return ctx;
}

