import type { FC } from "react";
import type { IProductitem } from "../../../Interfaces/IProductItem";
import type { ICountState } from "../../../store/slices/productSlice";
import useOrderDetailProducts from "./useOrderDetailProducts";
import OrderDetailProductsName from "./OrderDetailProductsName/OrderDetailProductsName";
import OrderDetailProductsImage from "./OrderDetailProductsImage";
import OrderDetailProductsPrice from "./OrderDetailProductsPrice";

interface IOrderDetailProducts {
  productData: Array<IProductitem>;
  productCount: Array<ICountState>;
}

const OrderDetailProducts: FC<IOrderDetailProducts> = ({ productData, productCount }) => {
  const { isDesktop } = useOrderDetailProducts();
  return (
    <>
      {productData &&
        productData?.map((item, i) => {
          const { image, slug, name, price } = item;

          return (
            <div key={i}>
              <div className={`items-center py-[20px] ${isDesktop ? "flex-row" : "flex-col"}  border-b-2  flex max-w-[650px]`}>
                <OrderDetailProductsImage image={image} />
                <OrderDetailProductsName name={name} slug={slug} />
                <OrderDetailProductsPrice price={price} id={item.id} productCount={productCount} />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default OrderDetailProducts;
