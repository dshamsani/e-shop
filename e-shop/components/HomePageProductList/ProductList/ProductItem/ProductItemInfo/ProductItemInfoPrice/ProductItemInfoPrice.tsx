import type { TFunction } from "i18next";
import type { FC } from "react";

interface IProductItemInfoPrice {
  price: number;
  t: TFunction<"common", undefined>;
}

const ProductItemInfoPrice: FC<IProductItemInfoPrice> = ({ price, t }) => {
  return (
    <div className="text-center rounded-[10px]  shadow-priceShadow text-[18px] min-h-[24px]  py-[5px] px-[10px] bg-priceBackground">
      <span className=" font-bold font-DraftE  text-x ">
        {price} {t("currency")}
      </span>
    </div>
  );
};

export default ProductItemInfoPrice;
