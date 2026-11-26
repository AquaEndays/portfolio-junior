"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

function subscribe(callback: () => void) {
  window.addEventListener("theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const current = getSnapshot();
    const next: Theme = current === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* stockage indisponible */
    }
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event("theme-change"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
