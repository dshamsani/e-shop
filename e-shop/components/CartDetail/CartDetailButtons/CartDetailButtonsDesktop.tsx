import { Button } from "@mui/material";
import Link from "next/link";
import type { FC } from "react";
import useCartDetail from "../useCartDetail";
import MoreInfoButton from "../../MoreInfoButton";

interface ICartDetailButtonsDesktop {
  orderButtonDisable: boolean;
  handleCartOrderButtonClicked: () => void;
}

const CartDetailButtonsDesktop: FC<ICartDetailButtonsDesktop> = ({ orderButtonDisable, handleCartOrderButtonClicked }) => {
  const { t } = useCartDetail();

  return (
    <div className="flex items-center justify-between min-h-[50px] max-h-[50px] h-full mt-[65px] mb-[100px]">
      <Link href="/">
        <a>
          <MoreInfoButton text={t("continueShoping")} />
        </a>
      </Link>
      <Button
        type="submit"
        disabled={orderButtonDisable}
        id="confirmbtn"
        sx={{ color: "#FFFFFF" }}
        onClick={handleCartOrderButtonClicked}
        className={`hover:cursor-pointer hover:bg-[#90a445] max-w-[222px] w-full min-h-[50px] bg-[#78787b]  rounded duration-[0.6s] font-DraftE text-[14px] leading-[1px]`}
      >
        {t("sendCartOrder")}
      </Button>
    </div>
  );
};

export default CartDetailButtonsDesktop;
