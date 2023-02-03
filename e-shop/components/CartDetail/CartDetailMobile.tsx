import type { FC } from "react";
import styles from "../../styles/CartDetail.module.scss";
import PaymentMethod from "./PaymentMethod";
import CartInfo from "./CartInfo";
import CartDetailForm from "./CartDetailForm";
import OrderPaymentPopup from "./OrderPaymentPopup";
import PositionedSnackbar from "../PositionalSnackbar/PositionalSnackbar";
import useCartDetail from "./useCartDetail";
import CartProductInfo from "./CartProductInfo";
import CartOrderSummary from "./CartOrderSummary";
import CartDetailButtons from "./CartDetailButtons";

const CartDetailMobile: FC = () => {
  const {
    snackBarOpen,
    setSnackBarOpen,
    popupOpen,
    setPopupOpen,
    checkCartFormValidation,
    setcheckCartFormValidation,
    setcheckBuisnessTermsChecked,
    cartOrderButtonClicked,
    orderButtonDisable,
    t,
    handleCartOrderButtonClicked,
    orderHash,
  } = useCartDetail();

  return (
    <div className={`${styles.cartDetailMobile} mt-[65px] pt-[10px] px-5 relative max-w-[1176px] w-full overflow-visible`}>
      <CartProductInfo setSnackBarOpen={setSnackBarOpen} />
      <PaymentMethod />
      <CartDetailForm setcheckCartFormValidation={setcheckCartFormValidation} />
      <CartInfo setcheckBuisnessTermsChecked={setcheckBuisnessTermsChecked} />
      <CartOrderSummary />
      <CartDetailButtons
        checkCartFormValidation={checkCartFormValidation}
        handleCartOrderButtonClicked={handleCartOrderButtonClicked}
        orderButtonDisable={orderButtonDisable}
      />
      <OrderPaymentPopup hash={orderHash} payment={cartOrderButtonClicked} opened={popupOpen} setPopupOpen={setPopupOpen} />
      {snackBarOpen && (
        <PositionedSnackbar type="remove" text={t("snackBarRemoveFromCart")} snackBarOpen={snackBarOpen} setSnackBarOpen={setSnackBarOpen} />
      )}
    </div>
  );
};

export default CartDetailMobile;
