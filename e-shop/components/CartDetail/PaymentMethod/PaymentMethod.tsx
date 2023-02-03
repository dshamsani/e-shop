import type { FC } from "react";
import styles from "../../../styles/CartDetail.module.scss";
import usePaymentMethod from "./usePaymentMethod";
import PaymentWithCard from "./PaymentWithCard";
import PaymentWithCash from "./PaymentWithCash";

const PaymentMethod: FC = ({}) => {
  const { t, selectedValue, handleChange } = usePaymentMethod();

  return (
    <div className="mt-[65px] max-w-[1176px] pt-[10px]">
      <h2 className={`${styles.productInfo} font-Lexon font-bold text-[30px]  pb-[15px] mt-[20px] flex self-start`}>{t("paymentMethod")}</h2>
      <div className={`${styles.productInfo}  flex items-center  justify-around w-full px-0 pt-[30px] pb-[20px]`}>
        <PaymentWithCard selectedValue={selectedValue} handleChange={handleChange} />
        <PaymentWithCash selectedValue={selectedValue} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default PaymentMethod;
