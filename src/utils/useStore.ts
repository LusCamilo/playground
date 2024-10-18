import { create } from "zustand";

export const useStore = create<{
  pageSelected: string;
  setPageSelected: (page: string) => void;
}>()((set) => ({
  pageSelected: "home",
  setPageSelected: (page) => set({ pageSelected: page }),
}));
