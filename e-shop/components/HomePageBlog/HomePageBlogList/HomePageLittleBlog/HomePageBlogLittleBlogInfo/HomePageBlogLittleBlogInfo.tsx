import Link from "next/link";
import type { FC } from "react";
import type { IHomePageBlogItem } from "../../../HomePageBlog";

interface IHomePageBlogLittleBlogInfo {
  blog: IHomePageBlogItem;
}

const HomePageBlogLittleBlogInfo: FC<IHomePageBlogLittleBlogInfo> = ({ blog }) => {
  const { slug, name, date, short_description } = blog;

  return (
    <div className="flex flex-col">
      <Link href={`/blog/${slug}`}>
        <h3 className="font-Lexon mt-[12px] text-[28px]  hover:cursor-pointer">{name}</h3>
      </Link>
      <div className="text-ugoGreen font-DraftE text-[16px]">{date}</div>
      <div className="text-[#020202] font-[16px] font-DraftE mt-[10px]">{short_description.substring(0, 82) + "..."}</div>
    </div>
  );
};

export default HomePageBlogLittleBlogInfo;
