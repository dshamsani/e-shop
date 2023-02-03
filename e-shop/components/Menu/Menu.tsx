import { useMediaQuery } from "@mui/material";
import type { FC } from "react";
import type { ICategory } from "../../pages";
import DesktopMenu from "./DestkopMenu";
import MobileMenu from "./MobileMenu";

export interface IMenu {
  data: ICategory;
}

const Menu: FC<IMenu> = ({ data }) => {
  const isDesktop = useMediaQuery("(min-width: 1300px)");

  return isDesktop ? <DesktopMenu data={data} /> : <MobileMenu data={data} />;
};

export default Menu;
