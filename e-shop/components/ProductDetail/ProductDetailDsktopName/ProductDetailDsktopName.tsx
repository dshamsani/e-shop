import type { FC } from "react";
import styles from "../../../styles/ProductDetailDesktop.module.scss";

interface IProductDetailDesktopName {
  name: string;
}

const ProductDetailDsktopName: FC<IProductDetailDesktopName> = ({ name }) => {
  return (
    <div className={`${styles.productDetail_name} `}>
      <h1 className="font-Lexon font-normal text-[43px] m-0 mb-5 leading-[normal] max-w-[601px] max-h-[60px]">{name}</h1>
    </div>
  );
};

export default ProductDetailDsktopName;
