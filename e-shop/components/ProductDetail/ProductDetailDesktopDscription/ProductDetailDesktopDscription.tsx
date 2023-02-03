import type { FC } from "react";
import styles from "../../../styles/ProductDetailDesktop.module.scss";

interface IProductDetailDesktopDescription {
  discription: string;
  quantity: string;
}

const ProductDetailDesktopDscription: FC<IProductDetailDesktopDescription> = ({ discription, quantity }) => {
  return (
    <div
      className={`${styles.productDetail_description} flex flex-col self-start text-black text-[13px] whitespace-pre-wrap max-w-[460px] min-h-[120px] font-normal leading-6`}
    >
      <p>
        <span>{discription}</span>
      </p>
      <div className={` justify-self-end `}>
        <p>{quantity}</p>
      </div>
    </div>
  );
};

export default ProductDetailDesktopDscription;
