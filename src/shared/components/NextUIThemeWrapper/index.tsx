import React, { FC } from "react";
import { EThemeMode } from "../../../common/types/theme.type";

type TProps = {
  themeMode: EThemeMode;
  children: React.ReactNode;
};

export const NUIThemeWrapper: FC<TProps> = ({ themeMode, children }) => {
  return (
    <div
      className={`${themeMode} text-foreground bg-background h-full`}
    >
      {children}
    </div>
  );
};
