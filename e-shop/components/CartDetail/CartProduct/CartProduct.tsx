import { useMediaQuery } from "@mui/material";
import type { Dispatch, FC, SetStateAction } from "react";
import CartProductDesktop from "./CartProductDesktop";
import CartProductMobile from "./CartProductMobile";

export interface ICartProduct {
  data: {
    id: number;
    name: string;
    discription: string;
    price: number;
    slug: string;
    image: {
      id: string;
      filename_downoload: string;
    };
  };
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
}

const CartProduct: FC<ICartProduct> = ({ data, setSnackBarOpen }) => {
  const isDesktop = useMediaQuery("(min-width: 670px)");
  return isDesktop ? (
    <CartProductDesktop setSnackBarOpen={setSnackBarOpen} data={data} />
  ) : (
    <CartProductMobile setSnackBarOpen={setSnackBarOpen} data={data} />
  );
};

export default CartProduct;
