import Link from "next/link";
import type { FC } from "react";
import styles from "../../../../styles/BlogPage.module.scss";
import type { IHomePageBlogItem } from "../../HomePageBlog";
import MoreInfoButton from "../../../MoreInfoButton";
import { useTranslation } from "next-i18next";
import HomePageBlogMainBlogImage from "./HomePageBlogMainBlogImage";
import HomePageMainBlogInfo from "./HomePageMainBlogInfo";

interface IHomePageBlogMainBlog {
  blog: IHomePageBlogItem;
}

const HomePageBlogMainBlog: FC<IHomePageBlogMainBlog> = ({ blog }) => {
  const { t } = useTranslation("common");
  const { image, slug } = blog;

  return (
    <div className={`${styles.container_firstElement} hover:-translate-y-[5px] hover:text-ugoGreen  hover:shadow-hover duration-[0.4s]  bg-white`}>
      <HomePageBlogMainBlogImage image={image} slug={slug} />
      <div>
        <div className="flex justify-around items-end  ">
          <HomePageMainBlogInfo blog={blog} />
          <Link href={`/blog/${slug}`}>
            <a className="max-h-[200px] min-w-[120px] max-w-[120px] w-full flex items-end h-full">
              <MoreInfoButton text={`${t("findMore")}`} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlogMainBlog;
