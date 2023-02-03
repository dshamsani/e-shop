import { FC } from "react";
import Layout from "../../components/Layout";
import { gql } from "@apollo/client";
import client from "../../apollo_client";
import { GetServerSideProps } from "next";
import IProductitem from "../../Interfaces/IProductItem";
import { ICategory } from "..";
import HomePageProductList from "../../components/HomePageProductList";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export interface ICategoryData {
  products: Array<IProductitem>;
}

interface ICategoryPage {
  data: ICategoryData;
  categoryData: ICategory;
  categorySlug: {
    categories: Array<{
      id: string;
      category_name: string;
      slug: string;
    }>;
  };
}

const Category: FC<ICategoryPage> = ({ data, categoryData, categorySlug }) => {
  const { categories } = categorySlug;

  const { products } = data;
  return (
    <Layout data={categoryData} title={categories[0].category_name}>
      <div className="p-12">
        <HomePageProductList name={categories[0].category_name} data={products} />
      </div>
    </Layout>
  );
};

export default Category;

async function getCategoryData(slug: string | string[]) {
  const { data: categoryData } = await client.query<ICategory>({
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

  const { data: categorySlug } = await client.query({
    query: gql`
    {
      categories (filter: {status: { _eq: "published" }, slug: {_eq: "${slug}"}}) {
        id
        category_name
        slug
      }
    }
    `,
  });

  return {
    categoryData,
    categorySlug,
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params.slug;
  const locale = context.locale;

  const { data } = await client.query<ICategoryData>({
    query: gql`
      query {
        products(filter: { category: { slug: {_eq: "${slug}"} }, status: {_eq: "published" } }) {
          id
          name
          category {
            id
            category_name
            slug
          }
          price
          slug
          discription
          quantity
          image {
            id
            filename_download
          }
        }
      }
    `,
  });
  const categories = await getCategoryData(slug);
  const { categoryData, categorySlug } = categories;

  return categorySlug.categories.length > 0
    ? {
        props: {
          data,
          categoryData,
          categorySlug,
          ...(await serverSideTranslations(locale, ["common"])),
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
