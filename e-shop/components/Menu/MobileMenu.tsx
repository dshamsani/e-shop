import LogoIcon from "../../Icons/LogoIcon";
import MenuDrawer from "./MenuDrawer";
import type { FC } from "react";
import dynamic from "next/dynamic";
import { IconButton } from "@mui/material";
import Link from "next/link";
import type { IMenu } from "./Menu";

const CartBadgeDynamic = dynamic(() => import("./CartBadge"), {
  ssr: false,
});

const MobileMenu: FC<IMenu> = ({ data }) => {
  return (
    <header>
      <div className="navbar navbar-expand-lg fixed z-50 inset-x-0 shadow-md py-2 bg-[#f3f1eb] flex items-center w-full justify-between">
        <div className="ml-5">
          <Link href={"/"}>
            <IconButton>
              <LogoIcon />
            </IconButton>
          </Link>
        </div>
        <div className="flex py-2 items-center  mr-5">
          <div className="mr-5 hover:cursor-pointer">
            <CartBadgeDynamic />
          </div>
          <MenuDrawer data={data} />
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
