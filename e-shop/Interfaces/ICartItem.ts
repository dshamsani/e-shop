import { Dispatch, SetStateAction } from "react";
import IProductitem from "./IProductItem";

export default interface ICartItem {
  data: IProductitem;
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
}
