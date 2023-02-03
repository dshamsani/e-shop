import type { Dispatch, FC, SetStateAction } from "react";
import styles from "../../../styles/CartDetail.module.scss";
import CartInfoBuisnessTerms from "./CartInfoBuisnessTerms";
import CartInfoNewsCheckbox from "./CartInfoNewsCheckbox";
import CartInfoTextArea from "./CartInfoTextArea";
import useCartInfo from "./useCartInfo";

interface ICartInfo {
  setcheckBuisnessTermsChecked: Dispatch<SetStateAction<boolean>>;
}

const CartInfo: FC<ICartInfo> = ({ setcheckBuisnessTermsChecked }) => {
  const { t, checked, setChecked } = useCartInfo(setcheckBuisnessTermsChecked);

  return (
    <div className="mt-[65px] max-w-[1176px] pt-[10px]">
      <h2 className={`${styles.productInfo} font-Lexon font-bold text-[30px]  pb-[15px] mt-[20px] flex self-start`}>{t("orderNotes")}</h2>
      <CartInfoTextArea />
      <CartInfoBuisnessTerms checked={checked} setChecked={setChecked} />
      <CartInfoNewsCheckbox />
    </div>
  );
};

export default CartInfo;
