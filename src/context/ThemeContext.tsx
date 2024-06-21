import { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  currentTheme: "dark" | "light";
  toggleTheme: () => void;
};

const defaultContextValue: ThemeContextType = {
  currentTheme: "dark",
  toggleTheme: () => {}, 
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const root = document.getElementById("root")!;
    if (currentTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [currentTheme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ currentTheme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}