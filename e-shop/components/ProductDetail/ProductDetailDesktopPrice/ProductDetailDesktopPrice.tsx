import type { TFunction } from "i18next";
import type { FC } from "react";
import styles from "../../../styles/ProductDetailDesktop.module.scss";

interface IProductDetailDesktopPrice {
  price: number;
  t: TFunction<"common", undefined>;
}

const ProductDetailDesktopPrice: FC<IProductDetailDesktopPrice> = ({ price, t }) => {
  return (
    <div className={`${styles.productDetail_addToCart} flex self-start`}>
      <div className={`${styles.productDetail_info} flex  `}>
        <span className="text-ugoGreen text-[18px] font-DraftE">
          {price} {t("currency")} s DPH
        </span>
      </div>
    </div>
  );
};

export default ProductDetailDesktopPrice;
