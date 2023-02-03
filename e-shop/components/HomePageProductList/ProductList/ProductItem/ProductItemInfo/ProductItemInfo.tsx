import type { Dispatch, FC, SetStateAction } from "react";
import type { IProductitem } from "../../../../../Interfaces/IProductItem";
import styles from "../../../../../styles/ProductItem.module.scss";
import useCartItem from "../../../../ProductDetail/ProductDetailDesktopButtons/useProductDetailDesktopButtons";
import useProductItem from "../useProductItem";
import ProductItemInfoButton from "./ProductItemInfoButton";
import ProductItemInfoPrice from "./ProductItemInfoPrice";

interface IProductItemInfo {
  data: IProductitem;
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
}

const ProductItemInfo: FC<IProductItemInfo> = ({ data, setSnackBarOpen }) => {
  const { AddToCart } = useCartItem();

  const { t, price } = useProductItem(data);

  return (
    <div className={`${styles.productItem_cartInfo} flex justify-center items-end px-15`}>
      <div className=" min-w-[226px] max-w-[226px] grid items-end max-h-[90px] min-h-[90px]">
        <div className={`${styles.addToCartBar} w-full h-[38px] items-center`}>
          <ProductItemInfoPrice price={price} t={t} />
          <ProductItemInfoButton AddToCart={AddToCart} t={t} data={data} setSnackBarOpen={setSnackBarOpen} />
        </div>
      </div>
    </div>
  );
};

export default ProductItemInfo;
