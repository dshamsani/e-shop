import React from "react";
import type { FC } from "react";
import { ICategory } from "../../pages";
import HeadComponent from "../HeadComponent";
import Menu from "../Menu";

interface ILayout {
  children: JSX.Element;
  title?: string;
  data?: ICategory;
}

const Layout: FC<ILayout> = ({ children, title, data }) => {
  return (
    <>
      <HeadComponent title={title} />
      <div className="flex flex-col justify-center ">
        <Menu data={data} />
        <main className="flex flex-col items-center mt-28">{children}</main>
      </div>
    </>
  );
};

export default Layout;
