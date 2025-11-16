import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext('light')

interface ThemeContextType {
  theme: "light" | "dark";
  // void=(return nothing)
  toggleTheme: () => void;
}

interface ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeContextProps) {
  //state data
  const [theme, setTheme] = useState(() => {
    // getItem=(read data)
    const saved = localStorage.getItem("theme");
    // if saved is 'dark', return 'dark', elese, return 'light'
    return (saved === "dark" ? "dark" : "light") as "light" | "dark";
  });

  useEffect(() => {
    //save theme in local storage
    // 'theme'=(key->name under which the browser will store the data)
    // theme=(value->'dark' or 'light')
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // if previous theme is 'light', return 'dark', else 'light'
    // prev=(previous value of theme-> 'light' or 'dark')
    // if previous value is 'ligh', return 'dark', else return 'light'
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
