import { FC } from "react";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import { gql } from "@apollo/client";
import client from "../../apollo_client";
import IProductDetailItem from "../../Interfaces/IProductDetailItem";
import { GetServerSideProps } from "next";
import { ICategory } from "..";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IProductPage {
  data: {
    products: Array<IProductDetailItem>;
  };
  categoryData: ICategory;
}

const Product: FC<IProductPage> = ({ categoryData, data }) => {
  const { products } = data;
  return (
    <Layout data={categoryData} title={products[0].name}>
      <ProductDetail data={products[0]} />
    </Layout>
  );
};

export default Product;

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params.slug;
  const locale = context.locale;

  const { data } = await client.query({
    query: gql`
      query {
        products(filter: { slug: { _eq: "${slug}" }, status: {_eq: "published" } }) {
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

  const categoryData = await getCategoryData();

  return data.products.length > 0
    ? {
        props: {
          data,
          categoryData,
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
