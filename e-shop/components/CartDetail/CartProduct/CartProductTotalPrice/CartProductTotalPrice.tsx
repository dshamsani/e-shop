import { useTranslation } from "next-i18next";
import type { FC } from "react";
import styles from "../../../../styles/CartDetail.module.scss";

interface ICartProductTotalPrice {
  price: number;
  count: number;
}

const CartProductTotalPrice: FC<ICartProductTotalPrice> = ({ price, count }) => {
  const { t } = useTranslation("common");

  return (
    <div className={`${styles.cartItem_totalPrice}`}>
      <span className=" !min-w-full  text-[16px] font-sans font-semibold">
        {price * count} {t("currency")}
      </span>
    </div>
  );
};

export default CartProductTotalPrice;
