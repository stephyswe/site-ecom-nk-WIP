import { create } from "zustand";

interface ProductNavStateStore {
  isOpen: string;
  onOpen: (id: string) => void;
  onClose: (id: string) => void;
}

const useProductNavState = create<ProductNavStateStore>((set) => ({
  isOpen: "",
  onOpen: (id: any) => set({ isOpen: id }),
  onClose: () => set({ isOpen: "" }),
}));

export default useProductNavState;
