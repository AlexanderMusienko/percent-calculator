import { useContext } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../../assets/icons/MoonIcon";
import { SunIcon } from "../../../assets/icons/SunIcon";
import { ThemeContext } from "../../../common/contexts/theme.context";
import { EThemeMode } from "../../../common/types/theme.type";

export const ThemeSwitch = () => {
  const { themeMode, changeThemeMode } = useContext(ThemeContext);

  return (
    <Switch
      size="lg"
      color="secondary"
      className="-mr-2"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={() => {
        changeThemeMode(
          themeMode === EThemeMode.DARK ? EThemeMode.LIGHT : EThemeMode.DARK
        );
      }}
    />
  );
};
