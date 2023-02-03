import type { FC } from "react";
import type { IHomePageBlogItem } from "../../HomePageBlog";
import HomePageMobileMainBlogImage from "./HomePageMobileMainBlogImage";
import HomePageMobileMainBlogInfo from "./HomePageMobileMainBlogInfo";

interface IHomePageBlogMobileMainBlog {
  blog: IHomePageBlogItem;
}

const HomePageBlogMobileMainBlog: FC<IHomePageBlogMobileMainBlog> = ({ blog }) => {
  const { image, slug } = blog;

  return (
    <div className={`hover:-translate-y-[5px] mb-[15px] hover:text-ugoGreen  hover:shadow-hover duration-[0.4s] hover:cursor-pointer  bg-white`}>
      <HomePageMobileMainBlogImage image={image} slug={slug} />
      <HomePageMobileMainBlogInfo blog={blog} />
    </div>
  );
};

export default HomePageBlogMobileMainBlog;
