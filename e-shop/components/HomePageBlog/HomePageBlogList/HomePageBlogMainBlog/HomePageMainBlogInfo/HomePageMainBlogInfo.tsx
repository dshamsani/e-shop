import Link from "next/link";
import type { FC } from "react";
import type { IHomePageBlogItem } from "../../../HomePageBlog";

interface IHomePageMainBlogInfo {
  blog: IHomePageBlogItem;
}

const HomePageMainBlogInfo: FC<IHomePageMainBlogInfo> = ({ blog }) => {
  const { name, date, short_description, slug } = blog;

  return (
    <div className="flex items-start px-5 flex-col max-w-[785px]">
      <Link href={`/blog/${slug}`}>
        <a>
          <h3 className="mt-[12px] font-Lexon hover:cursor-pointer text-[28px]">{name}</h3>
        </a>
      </Link>
      <div className="text-ugoGreen font-DraftE text-[16px]">{date}</div>
      <div className="text-[#020202] font-[16px] font-DraftE">{short_description}</div>
    </div>
  );
};

export default HomePageMainBlogInfo;
