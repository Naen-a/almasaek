import { create } from "zustand";

export const useUserStore = create((set) => ({
  login: "testing",
  setUserLogin: () => set((state) => ({ login: state.login })),
}));
