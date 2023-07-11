import { create } from "zustand";

interface MenuStateStore {
  isOpen: string;
  onOpen: (id: string) => void;
  onClose: (id: string) => void;
}

const useMenuState = create<MenuStateStore>((set) => ({
  isOpen: "",
  onOpen: (id: any) => set({ isOpen: id }),
  onClose: () => set({ isOpen: "" }),
}));

export default useMenuState;
