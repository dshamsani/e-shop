import { useTranslation } from "next-i18next";
import Link from "next/link";
import type { FC } from "react";
import type { IHomePageBlogItem } from "../../../HomePageBlog";
import HomePageMobileMainBlogInfoMainInfo from "./HomePageMobileMainBlogInfoMainInfo";

interface IHomePageMobileMainBlogInfo {
  blog: IHomePageBlogItem;
}

const HomePageMobileMainBlogInfo: FC<IHomePageMobileMainBlogInfo> = ({ blog }) => {
  const { t } = useTranslation("common");

  const { slug } = blog;

  return (
    <div>
      <HomePageMobileMainBlogInfoMainInfo blog={blog} />
      <Link href={`/blog/${slug}`}>
        <div className="  max-w-[840px] w-full justify-end p-4 flex items-start h-full">
          <span className="font-DraftE text-[16px] text-ugoGreen self-end">{t("findMore")} </span>
        </div>
      </Link>
    </div>
  );
};

export default HomePageMobileMainBlogInfo;
