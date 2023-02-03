import { FC, useEffect } from "react";
import styles from "../../styles/CartDetail.module.scss";
import PaymentMethod from "./PaymentMethod";
import CartDetailForm from "./CartDetailForm";
import CartInfo from "./CartInfo";
import OrderPaymentPopup from "./OrderPaymentPopup/OrderPaymentPopup";
import PositionedSnackbar from "../PositionalSnackbar/PositionalSnackbar";
import useCartDetail from "./useCartDetail";
import CartProductInfo from "./CartProductInfo";
import CartOrderSummary from "./CartOrderSummary";
import CartDetailButtons from "./CartDetailButtons";

const CartDetailDesktop: FC = () => {
  const {
    snackBarOpen,
    setSnackBarOpen,
    popupOpen,
    setPopupOpen,
    setcheckCartFormValidation,
    setcheckBuisnessTermsChecked,
    cartOrderButtonClicked,
    orderButtonDisable,
    t,
    handleCartOrderButtonClicked,
    checkCartFormValidation,
    orderHash,
  } = useCartDetail();

  return (
    <>
      <div className={`${styles.cartDetail} mt-[65px] pt-[10px] mx-5 relative max-w-[1176px] w-full overflow-visible`}>
        <CartProductInfo setSnackBarOpen={setSnackBarOpen} />
        <CartOrderSummary />
      </div>
      <div className="max-w-[1176px] flex justify-start w-full">
        <div className="max-w-[800]">
          <PaymentMethod />
          <CartDetailForm setcheckCartFormValidation={setcheckCartFormValidation} />
          <CartInfo setcheckBuisnessTermsChecked={setcheckBuisnessTermsChecked} />
          <CartDetailButtons
            checkCartFormValidation={checkCartFormValidation}
            handleCartOrderButtonClicked={handleCartOrderButtonClicked}
            orderButtonDisable={orderButtonDisable}
          />
          <OrderPaymentPopup hash={orderHash} payment={cartOrderButtonClicked} opened={popupOpen} setPopupOpen={setPopupOpen} />
        </div>
        {snackBarOpen && (
          <PositionedSnackbar type="remove" text={t("snackBarRemoveFromCart")} snackBarOpen={snackBarOpen} setSnackBarOpen={setSnackBarOpen} />
        )}
      </div>
    </>
  );
};

export default CartDetailDesktop;
