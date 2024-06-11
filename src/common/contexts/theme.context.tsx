import React, { createContext, useState } from "react";
import { EThemeMode } from "../types/theme.type";

type ThemeContextType = {
  themeMode: EThemeMode;
  setThemeMode: (themeMode: EThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: EThemeMode.DARK,
  setThemeMode: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<EThemeMode>(EThemeMode.DARK);

  const changeThemeMode = (newThemeMode: EThemeMode) => {
    setThemeMode(newThemeMode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode: changeThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
