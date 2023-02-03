import { useMediaQuery } from "@mui/material";
import type { TFunction } from "i18next";
import type { FC } from "react";
import styles from "../../../../styles/CartDetail.module.scss";

interface ICartProductBasicPrice {
  price: number;
  t: TFunction<"common", undefined>;
}

const CartProductBasicPrice: FC<ICartProductBasicPrice> = ({ price, t }) => {
  const isDesktop = useMediaQuery<boolean>("(min-width: 670px)");

  return (
    <div
      className={`${isDesktop ? styles.cartItem_basicPrice : styles.cartProductMobile_basicPrice} !min-w-full  text-[16px] font-sans font-semibold`}
    >
      {price} {t("currency")}
    </div>
  );
};

export default CartProductBasicPrice;
