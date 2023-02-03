import type { FC } from "react";
import type { IHomePageBlog } from "../HomePageBlog";
import styles from "../../../styles/BlogPage.module.scss";
import HomePageBlogMainBlog from "./HomePageBlogMainBlog";
import HomePageLittleBlog from "./HomePageLittleBlog";

const HomePageBlogListDesktop: FC<IHomePageBlog> = ({ blog }) => {
  return (
    <div className={`${styles.container}      max-w-[1200px]`}>
      <HomePageBlogMainBlog blog={blog[0]} />
      <div className={`${styles.container_otherElements}`}>
        <HomePageLittleBlog blog={blog[1]} />
        <HomePageLittleBlog blog={blog[2]} />
      </div>
    </div>
  );
};

export default HomePageBlogListDesktop;
