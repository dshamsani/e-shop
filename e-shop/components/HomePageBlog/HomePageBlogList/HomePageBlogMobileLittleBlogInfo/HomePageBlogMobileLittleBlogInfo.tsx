import Link from "next/link";
import type { FC } from "react";
import type { IHomePageBlogItem } from "../../HomePageBlog";

interface IHomePageBlogMobileLittleBlogInfo {
  blog: IHomePageBlogItem;
}

const HomePageBlogMobileLittleBlogInfo: FC<IHomePageBlogMobileLittleBlogInfo> = ({ blog }) => {
  const { slug, name, date, short_description } = blog;

  return (
    <div className="flex flex-col">
      <Link href={`/blog/${slug}`}>
        <a>
          <h3 className="font-Lexon mt-[12px] text-[28px]">{name}</h3>
        </a>
      </Link>
      <div className="text-ugoGreen font-DraftE text-[16px]">{date}</div>
      <div className="text-[#020202] font-[16px] font-DraftE mt-[10px]">{short_description.substring(0, 75) + "..."}</div>
    </div>
  );
};

export default HomePageBlogMobileLittleBlogInfo;
