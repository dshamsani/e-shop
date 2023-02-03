import type { FC } from "react";
import type { ICountState } from "../../../../store/slices/productSlice";
import useOrderDetailProducts from "../useOrderDetailProducts";

interface IOrderDetailProductsPrice {
  price: number;
  productCount: Array<ICountState>;
  id: number;
}

const OrderDetailProductsPrice: FC<IOrderDetailProductsPrice> = ({ price, productCount, id }) => {
  const { t } = useOrderDetailProducts();

  return (
    <div className={` flex flex-col  text-[16px] font-sans font-semibold`}>
      <span className=" text-center">{price} Kč</span>
      {productCount.map((count, i) => {
        const { productId, productCount } = count;

        if (productId == id) {
          return (
            <span key={i}>
              {t("quantity")}: {productCount}
            </span>
          );
        }
      })}
    </div>
  );
};

export default OrderDetailProductsPrice;
