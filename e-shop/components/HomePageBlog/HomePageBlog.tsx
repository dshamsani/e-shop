import { useTranslation } from "next-i18next";
import type { FC } from "react";
import HomePageBlogList from "./HomePageBlogList";

export interface IHomePageBlogItem {
  description: string;
  name: string;
  date: string;
  slug: string;
  short_description: string;
  image: {
    id: string;
    filename_downoload: string;
  };
}

export interface IHomePageBlog {
  blog: Array<IHomePageBlogItem>;
}

const HomePageBlog: FC<IHomePageBlog> = ({ blog }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="flex flex-col">
        <h3 className="mb-8 text-center font-Lexon font-thin text-[52px]">{t("blog")}</h3>
        <HomePageBlogList blog={blog} />
      </div>
    </div>
  );
};

export default HomePageBlog;
