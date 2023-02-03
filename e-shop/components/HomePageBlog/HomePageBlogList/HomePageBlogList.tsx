import type { FC } from "react";
import type { IHomePageBlog } from "../HomePageBlog";
import { useMediaQuery } from "@mui/material";
import HomePageBlogListDesktop from "./HomePageBlogListDesktop";
import HomePageBlogListMobile from "./HomePageBlogListMobile";

const HomePageBlogList: FC<IHomePageBlog> = ({ blog }) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return isDesktop ? <HomePageBlogListDesktop blog={blog} /> : <HomePageBlogListMobile blog={blog} />;
};

export default HomePageBlogList;
