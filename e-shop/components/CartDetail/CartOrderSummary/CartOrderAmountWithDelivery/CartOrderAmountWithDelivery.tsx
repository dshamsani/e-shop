import { useTranslation } from "next-i18next";
import type { FC } from "react";

interface CartOrderAmountWithDelivery {
  cartProductAmount: number;
}

const CartOrderAmountWithDelivery: FC<CartOrderAmountWithDelivery> = ({ cartProductAmount }) => {
  const { t } = useTranslation("common");

  return (
    <div className="w-full max-h-[48px] h-full bg-cartAmountBg flex font-DraftE font-semibold text-[20px] py-[7px] px-[12px] justify-between ">
      <span>{t("amount")}</span>
      <span>
        {cartProductAmount + 59} {t("currency")}
      </span>
    </div>
  );
};

export default CartOrderAmountWithDelivery;
