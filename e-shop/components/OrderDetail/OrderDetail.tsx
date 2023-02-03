import type { TFunction } from "i18next";
import dynamic from "next/dynamic";
import type { FC } from "react";
import type { IProductitem } from "../../Interfaces/IProductItem";
import { ICountState } from "../../store/slices/productSlice";
import OrderDetailUserInfo from "./OrderDetailUserInfo";

interface IOrderDetail {
  product_data: Array<IProductitem>;
  product_count: Array<ICountState>;
  amount: number;
  order_status: string;
  t: TFunction<"common", undefined>;
  userInfo: {
    name: string;
    surname: string;
    email: string;
    mobile: string;
    adress: string;
  };
}

const OrderDetailProductsWithNoSSR = dynamic(() => import("./OrderDetailProducts/OrderDetailProducts"), {
  ssr: false,
});

const OrderDetailAmountWithNoSSR = dynamic(() => import("./OrderDetailAmount/OrderDetailAmount"), {
  ssr: false,
});

const OrderDetail: FC<IOrderDetail> = ({ product_data, product_count, amount, t, order_status, userInfo }) => {
  return (
    <div className={`bg-white mt-[65px] pt-[10px] mx-5 p-10 flex flex-col items-center max-w-[600px] w-full overflow-visible`}>
      <span className=" text-center font-Lexon border-b-2 text-[48px]">{t("orderDetail")}</span>
      <div className="w-full">
        <OrderDetailProductsWithNoSSR productData={product_data} productCount={product_count} />
        <OrderDetailUserInfo userInfo={userInfo} />
        <div className=" text-center">
          <OrderDetailAmountWithNoSSR amount={amount} />
          <p className="font-DraftE">{t("orderStateInfo")}</p>
          <p className="font-DraftE">
            {t("orderStateNew")} {order_status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
