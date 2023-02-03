import type { FC } from "react";
import styles from "../../../styles/CartDetail.module.scss";
import useCartDetail from "../useCartDetail";
import CartOrderAmountWithDelivery from "./CartOrderAmountWithDelivery";
import CartOrderAmountWithoutDelivery from "./CartOrderAmountWithoutDelivery";

const CartOrderSummary: FC = () => {
  const { t, cartProductAmount } = useCartDetail();

  return (
    <div className="flex flex-col ">
      <h2 className={`${styles.productInfo} w-full font-Lexon font-bold text-[30px] pb-[15px] mt-[20px] flex self-start`}>{t("orderSum")}</h2>
      <CartOrderAmountWithoutDelivery cartProductAmount={cartProductAmount} />
      <div className="flex font-DraftE px-[10px] text-[16px] leading-[18px] pt-[4px] pb-[14px] w-full justify-between">
        <span>{t("delivery")}</span>
        <span>59 {t("currency")}</span>
      </div>
      <CartOrderAmountWithDelivery cartProductAmount={cartProductAmount} />
    </div>
  );
};

export default CartOrderSummary;
