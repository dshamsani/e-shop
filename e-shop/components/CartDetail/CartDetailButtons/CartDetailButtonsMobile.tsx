import { Button, useMediaQuery } from "@mui/material";
import type { FC } from "react";
import useCartDetail from "../useCartDetail";
import MoreInfoButton from "../../MoreInfoButton";

interface ICartDetailButtonsMobile {
  orderButtonDisable: boolean;
  checkCartFormValidation: boolean;
  handleCartOrderButtonClicked: () => void;
}

const CartDetailButtonsMobile: FC<ICartDetailButtonsMobile> = ({ orderButtonDisable, checkCartFormValidation, handleCartOrderButtonClicked }) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const { t } = useCartDetail();

  return (
    <div
      className={`flex ${
        isDesktop ? "flex-row" : "flex-col-reverse"
      } items-center justify-between min-h-[50px] max-h-[50px] h-full mt-[65px] mb-[100px]`}
    >
      <MoreInfoButton text={t("continueShoping")} />
      <Button
        type="submit"
        disabled={orderButtonDisable}
        id="confirmbtn"
        sx={{ color: "#FFFFFF" }}
        onClick={handleCartOrderButtonClicked}
        className={`${
          checkCartFormValidation == false && "hover:cursor-pointer hover:bg-[#90a445]"
        } max-w-[222px] w-full min-h-[50px] bg-[#78787b]  rounded duration-[0.6s] font-DraftE text-[14px] leading-[1px]`}
      >
        {t("sendCartOrder")}
      </Button>
    </div>
  );
};

export default CartDetailButtonsMobile;
