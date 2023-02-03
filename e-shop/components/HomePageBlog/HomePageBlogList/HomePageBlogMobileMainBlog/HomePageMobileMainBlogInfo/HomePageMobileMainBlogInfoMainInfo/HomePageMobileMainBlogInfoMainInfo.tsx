import Link from "next/link";
import type { FC } from "react";
import type { IHomePageBlogItem } from "../../../../HomePageBlog";

interface IHomePageMobileMainBlogInfoMainInfo {
  blog: IHomePageBlogItem;
}

const HomePageMobileMainBlogInfoMainInfo: FC<IHomePageMobileMainBlogInfoMainInfo> = ({ blog }) => {
  const { slug, name, date, short_description } = blog;

  return (
    <div className="flex justify-around items-end  ">
      <div className="flex items-start px-5 flex-col max-w-[785px]">
        <Link href={`/blog/${slug}`}>
          <h3 className="mt-[12px] font-Lexon hover:cursor-pointer text-[28px]">{name}</h3>
        </Link>
        <div className="text-ugoGreen font-DraftE text-[16px]">{date}</div>
        <div className="text-[#020202] font-[16px] font-DraftE">{short_description}</div>
      </div>
    </div>
  );
};

export default HomePageMobileMainBlogInfoMainInfo;
