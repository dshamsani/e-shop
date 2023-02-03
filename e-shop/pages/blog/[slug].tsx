import { FC } from "react";
import Layout from "../../components/Layout";
import { gql } from "@apollo/client";
import client from "../../apollo_client";
import { GetServerSideProps } from "next";
import BlogDetail from "../../components/BlogDetail";
import { IHomePageBlogItem } from "../../components/HomePageBlog/HomePageBlog";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ICategoryData } from "../category/[slug]";
import { ICategory } from "..";

interface IBlog {
  data: {
    blog: Array<IHomePageBlogItem>;
  };
  categoryData: ICategory;
}

const Blog: FC<IBlog> = ({ data, categoryData }) => {
  const { blog } = data;
  return (
    <Layout data={categoryData} title={blog[0].name}>
      <BlogDetail blog={blog[0]} />
    </Layout>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params.slug;
  const locale = context.locale;

  const { data: categoryData } = await client.query<ICategoryData>({
    query: gql`
      {
        categories(filter: { status: { _eq: "published" } }) {
          id
          category_name
          slug
        }
      }
    `,
  });

  const { data } = await client.query({
    query: gql`
      {
        blog(filter: { slug: { _eq: "${slug}" }, status: {_eq: "published" } }) {
          id
          name
          date
          slug
          short_description
          image {
            id
            filename_download
          }
          description
        }
      }
    `,
  });

  return data.blog.length > 0
    ? {
        props: {
          data,
          ...(await serverSideTranslations(locale, ["common"])),
          categoryData,
        },
      }
    : {
        redirect: {
          permanent: false,
          destination: "/",
        },
        props: {},
      };
};
