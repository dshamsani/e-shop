import { useTranslation } from "next-i18next";
import Link from "next/link";
import type { FC } from "react";
import type { IHomePageBlogItem } from "../../HomePageBlog";
import HomePageBlogLittleBlogInfo from "./HomePageBlogLittleBlogInfo";

interface IHomePageLittleBlog {
  blog: IHomePageBlogItem;
}

const HomePageLittleBlog: FC<IHomePageLittleBlog> = ({ blog }) => {
  const { t } = useTranslation("common");

  const { slug } = blog;

  return (
    <div className="max-w-[262px]  pt-0 pr-5 pb-[15px] flex flex-col justify-end items-end pl-5  hover:text-ugoGreen hover:-translate-y-[5px]  hover:shadow-hover duration-[0.4s]  mb-[28px] w-full max-h-[366px] h-full bg-white">
      <HomePageBlogLittleBlogInfo blog={blog} />
      <Link href={`/blog/${slug}`}>
        <div className="max-h-[200px] flex items-end h-full">
          <a className=" font-DraftE text-[16px] text-ugoGreen self-end  hover:cursor-pointer">{t("findMore")} </a>
        </div>
      </Link>
    </div>
  );
};

export default HomePageLittleBlog;
