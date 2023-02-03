import { useTranslation } from "next-i18next";
import type { FC } from "react";

interface ICartOrderAmountWithoutDelivery {
  cartProductAmount: number;
}

const CartOrderAmountWithoutDelivery: FC<ICartOrderAmountWithoutDelivery> = ({ cartProductAmount }) => {
  const { t } = useTranslation("common");

  return (
    <div className="flex font-DraftE text-[16px] leading-[18px] pt-[19px] pb-[14px] px-[10px] w-full justify-between">
      <span>{t("productPrice")}</span>
      <span>
        {cartProductAmount} {t("currency")}
      </span>
    </div>
  );
};

export default CartOrderAmountWithoutDelivery;
