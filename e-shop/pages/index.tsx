import Layout from "../components/Layout";
import client from "../apollo_client";
import { gql } from "@apollo/client";
import { FC } from "react";
import { IProductitem } from "../Interfaces/IProductItem";
import { GetServerSideProps } from "next";
import HomePageProductList from "../components/HomePageProductList/";
import { IHomePageBlog } from "../components/HomePageBlog/HomePageBlog";
import HomePageBlog from "../components/HomePageBlog/";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export interface ICategory {
  categories: Array<{
    id: string;
    category_name: string;
    slug: string;
  }>;
}

interface IHomeData {
  data: {
    products: Array<IProductitem>;
  };
  blogData: IHomePageBlog;
  categoryData: ICategory;
}

const Home: FC<IHomeData> = ({ data, blogData, categoryData }) => {
  const { products } = data;
  const { blog } = blogData;
  const { t } = useTranslation("common");

  return (
    <Layout title={t("header")} data={categoryData}>
      <>
        <div className="p-12">
          <HomePageProductList data={products} />
        </div>
        <div className="p-12">
          <HomePageBlog blog={blog} />
        </div>
      </>
    </Layout>
  );
};

export default Home;

async function getBlogData() {
  const data = await client.query({
    query: gql`
      {
        blog {
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

  return data.data;
}

async function getCategoryData() {
  const data = await client.query({
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

  return data.data;
}

async function getProductData() {
  const data = await client.query({
    query: gql`
      {
        products(filter: { status: { _eq: "published" } }) {
          id
          category {
            id
            category_name
          }
          slug
          name
          price
          image {
            id
            filename_download
          }
        }
      }
    `,
  });

  return data;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const { data } = await getProductData();
  const blogData = await getBlogData();
  const categoryData = await getCategoryData();

  return {
    props: {
      data,
      blogData,
      categoryData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
