import React, { createContext, useEffect, useState } from "react";
import { EThemeMode } from "../types/theme.type";

type ThemeContextType = {
  themeMode: EThemeMode;
  changeThemeMode: (themeMode: EThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: EThemeMode.DARK,
  changeThemeMode: () => {},
});

const changeHtmlRootThemeMode = (newThemeMode: EThemeMode) => {
  document.documentElement.classList.remove(EThemeMode.DARK, EThemeMode.LIGHT);
  document.documentElement.classList.add(newThemeMode);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<EThemeMode>(EThemeMode.DARK);

  const changeThemeMode = (newThemeMode: EThemeMode) => {
    setThemeMode(newThemeMode);
    changeHtmlRootThemeMode(newThemeMode);
  };

  useEffect(() => {
    changeHtmlRootThemeMode(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, changeThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
