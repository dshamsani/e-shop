import { useTranslation } from "next-i18next";
import type { FC } from "react";

interface IOrderDetailAmount {
  amount: number;
}

const OrderDetailAmount: FC<IOrderDetailAmount> = ({ amount }) => {
  const { t } = useTranslation("common");
  return (
    <span className="font-Lexon text-[24px] w-full">
      {t("amount")}: {amount} {t("currency")}
    </span>
  );
};

export default OrderDetailAmount;
