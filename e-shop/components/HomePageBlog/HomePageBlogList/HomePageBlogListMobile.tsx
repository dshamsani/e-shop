import type { FC } from "react";
import type { IHomePageBlog } from "../HomePageBlog";
import HomePageBlogMobileMainBlog from "./HomePageBlogMobileMainBlog";
import HomePageBlogMobileLittleBlog from "./HomePageBlogMobileLittleBlog";

const HomePageBlogListMobile: FC<IHomePageBlog> = ({ blog }) => {
  return (
    <div className={`flex flex-col  max-w-[1200px]`}>
      <HomePageBlogMobileMainBlog blog={blog[0]} />
      <HomePageBlogMobileLittleBlog blog={blog[1]} />
      <HomePageBlogMobileLittleBlog blog={blog[2]} />
    </div>
  );
};

export default HomePageBlogListMobile;
