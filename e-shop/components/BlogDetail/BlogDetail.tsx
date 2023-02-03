import { FC } from "react";
import type { IHomePageBlogItem } from "../HomePageBlog/HomePageBlog";
import DetailHeader from "../DetailHeader/DetailHeader";
import BlogDetailBody from "./BlogDetailBody";

export interface IBlogDetail {
  blog: IHomePageBlogItem;
}

const BlogDetail: FC<IBlogDetail> = ({ blog }) => {
  const { name } = blog;

  return (
    <>
      <DetailHeader name={name} />
      <BlogDetailBody blog={blog} />
    </>
  );
};

export default BlogDetail;
