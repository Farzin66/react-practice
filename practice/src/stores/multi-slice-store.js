import { create } from "zustand";
import { persist } from "zustand/middleware"

export const useMultiSliceStore = create( persist((set) => ({
//   Counter
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1})),
  
//   Theme
  theme: "light",
  toggleTheme: () => 
    set((state) => ({
        theme: state.theme === "light" ? "dark" : "light",
  })),

//   User
  user: null,
  login: (userData) => set(() => ({user: userData})),
  logout: () => set(() => ({user: null})), 
   }),
  
   {
    name: "multi-slice-storage",
    partialize: (state) => ({
        theme: state.theme,
        user: state.user,
    }),
}));