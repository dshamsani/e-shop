import LogoIcon from "../../Icons/LogoIcon";
import dynamic from "next/dynamic";
import type { FC } from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import type { IMenu } from "./Menu";

const CartBadgeDynamic = dynamic(() => import("./CartBadge"), {
  ssr: false,
});

const DesktopMenu: FC<IMenu> = ({ data }) => {
  const [hover, setHover] = useState<boolean>(false);
  const { t } = useTranslation("common");
  return (
    <header>
      <div className="navbar navbar-expand-lg fixed inset-x-0 z-50 shadow-md py-2  bg-[#f3f1eb] flex items-center w-full justify-around">
        <div className="ml-5">
          <Link href={"/"} locale="cs">
            <a>
              <IconButton className="items-center flex">
                <LogoIcon />
              </IconButton>
            </a>
          </Link>
        </div>
        <div className="block py-2 pr-4 pl-3 font-Lexon  text-black text-3xl">
          <div>
            <Link href="/" locale="cs">
              <a className="hover:cursor-pointer hover:text-ugoGreen duration-[0.6s] mr-5">{t("header")}</a>
            </Link>
            {data?.categories &&
              data.categories.map((item, i) => {
                return (
                  <Link href={`/category/${item.slug}`} key={i} locale="cs">
                    <a className="hover:cursor-pointer hover:text-ugoGreen duration-[0.6s] mr-5">{item.category_name}</a>
                  </Link>
                );
              })}
          </div>
        </div>
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="flex flex-col py-2 items-center">
          <div className="mr-5 hover:cursor-pointer">
            <CartBadgeDynamic />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopMenu;
