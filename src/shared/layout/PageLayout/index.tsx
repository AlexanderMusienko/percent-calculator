import { Link, Navbar, NavbarBrand, NavbarItem } from "@nextui-org/react";
import { Outlet } from "react-router-dom";
import { ThemeSwitch } from "../../components/ThemeSwitch";
import { PercentIcon } from "../../../assets/icons/PercentIcon";
import { Github } from "../../../assets/icons/Github";

const GHLink = "https://github.com/AlexanderMusienko/percent-calculator";

export const PageLayout = () => {
  return (
    <div className="h-full">
      <Navbar className="mb-4">
        <NavbarBrand>
          <PercentIcon />
        </NavbarBrand>
        <NavbarItem>
          <Link className="flex" href={GHLink}>
            <Github />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </Navbar>
      <Outlet />
    </div>
  );
};
