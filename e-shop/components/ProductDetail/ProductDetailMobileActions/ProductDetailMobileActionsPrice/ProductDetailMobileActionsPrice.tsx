import type { TFunction } from "i18next";
import type { FC } from "react";

interface IProductDetailMobileActionsPrice {
  price: number;
  t: TFunction<"common", undefined>;
}

const ProductDetailMobileActionsPrice: FC<IProductDetailMobileActionsPrice> = ({ price, t }) => {
  return (
    <span className="text-lg min-w-full px-8 font-semibold text-[#8aa431] text-left ">
      {price} {t("currency")} s DPH
    </span>
  );
};

export default ProductDetailMobileActionsPrice;
