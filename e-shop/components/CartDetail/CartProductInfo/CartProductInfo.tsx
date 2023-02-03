import type { Dispatch, FC, SetStateAction } from "react";
import useCartDetail from "../useCartDetail";
import CartProductInfoEmpty from "./CartProductInfoEmpty";
import CartProductInfoNotEmpty from "./CartProductInfoNotEmpty";

interface ICartProductInfo {
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
}

const CartProductInfo: FC<ICartProductInfo> = ({ setSnackBarOpen }) => {
  const { data } = useCartDetail();

  return data?.products.length !== 0 ? <CartProductInfoNotEmpty setSnackBarOpen={setSnackBarOpen} /> : <CartProductInfoEmpty />;
};

export default CartProductInfo;
