import { gql } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { FC, Suspense } from "react";
import { ICategory } from ".";
import client from "../apollo_client";
import CartDetail from "../components/CartDetail";
import DetailHeader from "../components/DetailHeader";
import Layout from "../components/Layout";
import { ICategoryData } from "./category/[slug]";

interface ICart {
  categoryData: ICategory;
}

const CartDetailDynamic = dynamic(() => import("../components/CartDetail"), {
  suspense: true,
});

const Cart: FC<ICart> = ({ categoryData }) => {
  const { t } = useTranslation("common");

  return (
    <Layout data={categoryData} title={t("cart")}>
      <>
        <DetailHeader name={t("cart")} />
        <Suspense fallback={<CircularProgress size="40vh" color="success" />}>
          <CartDetailDynamic />
        </Suspense>
      </>
    </Layout>
  );
};

export default Cart;

async function getCategoryData() {
  const { data } = await client.query<ICategoryData>({
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
  return data;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  const categoryData = await getCategoryData();
  return {
    props: {
      categoryData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
