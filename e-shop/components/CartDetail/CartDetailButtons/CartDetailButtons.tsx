import { useMediaQuery } from "@mui/material";
import type { FC } from "react";
import CartDetailButtonsDesktop from "./CartDetailButtonsDesktop";
import CartDetailButtonsMobile from "./CartDetailButtonsMobile";

interface ICartDetailButtons {
  orderButtonDisable: boolean;
  handleCartOrderButtonClicked: () => void;
  checkCartFormValidation: boolean;
}

const CartDetailButtons: FC<ICartDetailButtons> = ({ orderButtonDisable, handleCartOrderButtonClicked, checkCartFormValidation }) => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return isDesktop ? (
    <CartDetailButtonsDesktop orderButtonDisable={orderButtonDisable} handleCartOrderButtonClicked={handleCartOrderButtonClicked} />
  ) : (
    <CartDetailButtonsMobile
      orderButtonDisable={orderButtonDisable}
      handleCartOrderButtonClicked={handleCartOrderButtonClicked}
      checkCartFormValidation={checkCartFormValidation}
    />
  );
};

export default CartDetailButtons;
