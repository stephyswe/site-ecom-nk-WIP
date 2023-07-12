import { create } from "zustand";

interface WindowsSizeStore {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
}

const useWindowSizeState = create<WindowsSizeStore>((set) => ({
  isMobile: typeof window !== "undefined" ? window.innerWidth < 991 : false,
  setIsMobile: (value) => set({ isMobile: value }),
}));

if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    useWindowSizeState.getState().setIsMobile(width < 991);
  });
}

export default useWindowSizeState;
