import { CircularProgress, useMediaQuery } from "@mui/material";
import type { FC } from "react";
import CartDetailDesktop from "./CartDetailDesktop";
import CartDetailMobile from "./CartDetailMobile";
import useCartDetail from "./useCartDetail";

const CartDetail: FC = ({}) => {
  const isDesktop = useMediaQuery<boolean>("(min-width: 1200px)");
  const { loadingCart } = useCartDetail();

  return loadingCart ? (
    <div className="w-full min-h-[50vh] flex items-center justify-center">
      <CircularProgress size="20vh" color="success" />
    </div>
  ) : isDesktop ? (
    <CartDetailDesktop />
  ) : (
    <CartDetailMobile />
  );
};

export default CartDetail;
