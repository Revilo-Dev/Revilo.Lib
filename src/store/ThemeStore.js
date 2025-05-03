import { create } from "zustand";

const ThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "dark",
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

export default ThemeStore;
