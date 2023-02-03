import { useTranslation } from "next-i18next";
import Link from "next/link";
import type { FC } from "react";
import type { IHomePageBlogItem } from "../../HomePageBlog";
import HomePageBlogMobileLittleBlogInfo from "../HomePageBlogMobileLittleBlogInfo";

interface IHomePageBlogMobileLittleBlog {
  blog: IHomePageBlogItem;
}

const HomePageBlogMobileLittleBlog: FC<IHomePageBlogMobileLittleBlog> = ({ blog }) => {
  const { t } = useTranslation("common");

  const { slug } = blog;

  return (
    <div className="max-w-[840px] hover:text-ugoGreen mb-4   pt-0 pr-5 pb-[15px] flex flex-col justify-start items-start   pl-5  hover:-translate-y-[5px]  hover:shadow-hover duration-[0.4s] hover:cursor-pointer w-full  h-full bg-white">
      <HomePageBlogMobileLittleBlogInfo blog={blog} />
      <Link href={`/blog/${slug}`}>
        <div className="max-w-[840px] w-full flex justify-end items-end h-full">
          <span className="font-DraftE text-[16px] text-ugoGreen self-end">{t("findMore")} </span>
        </div>
      </Link>
    </div>
  );
};

export default HomePageBlogMobileLittleBlog;
