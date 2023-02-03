import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import client from "../../apollo_client";
import Layout from "../../components/Layout";
import OrderDetail from "../../components/OrderDetail";
import type { FC } from "react";
import type { ICategory } from "..";
import type { IProductitem } from "../../Interfaces/IProductItem";
import type { ICountState } from "../../store/slices/productSlice";

interface IOrderPageDataItem {
  hash_id: string;
  product_data: Array<IProductitem>;
  product_count: Array<ICountState>;
  order_status: string;
  amount: number;
  name: string;
  surname: string;
  email: string;
  mobile: string;
  adress: string;
}

interface IOrderPage {
  categoryData: ICategory;
  orderData: Array<IOrderPageDataItem>;
}

const OrderPage: FC<IOrderPage> = ({ categoryData, orderData }) => {
  const { t } = useTranslation("common");

  const { product_data, product_count, amount, order_status, name, surname, email, mobile, adress } = orderData[0];

  return (
    <Layout title={t("orderDetail")} data={categoryData}>
      <OrderDetail
        product_data={product_data}
        product_count={product_count}
        amount={amount}
        userInfo={{ name, surname, email, mobile, adress }}
        order_status={order_status}
        t={t}
      />
    </Layout>
  );
};

export default OrderPage;

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

async function getOrderData(equalHash) {
  const orderdata = await client.query({
    query: gql`
    {
      order(filter: { status: {_eq: "published"} ,hash_id: { _eq: "${equalHash}" } }) {
        hash_id
        product_data
        product_count
        order_status
        amount
        name
        surname
        email
        mobile
        adress
      }
    }
    `,
  });
  return orderdata.data.order;
}

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
  const categoryData = await getCategoryData();
  const orderData = await getOrderData(query.hash);
  return orderData.length > 0
    ? {
        props: {
          categoryData,
          orderData,
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
