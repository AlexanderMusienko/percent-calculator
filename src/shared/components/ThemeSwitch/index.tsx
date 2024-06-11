import { useContext } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../../assets/icons/MoonIcon";
import { SunIcon } from "../../../assets/icons/SunIcon";
import { EThemeMode } from "../../../common/types/theme.type";
import { ThemeContext } from "../../../common/contexts/theme.context";

export const ThemeSwitch = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  return (
    <Switch
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={() => {
        setThemeMode(
          themeMode === EThemeMode.DARK ? EThemeMode.LIGHT : EThemeMode.DARK
        );
      }}
    />
  );
};
