import { IconButton } from "@mui/material";
import type { Dispatch, FC, SetStateAction } from "react";
import RemoveFromCartIcon from "../../../../Icons/RemoveFromCartIcon";
import styles from "../../../../styles/CartDetail.module.scss";

interface ICartProductRemoveButton {
  deleteProduct: () => void;
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
}

const CartProductRemoveButton: FC<ICartProductRemoveButton> = ({ deleteProduct, setSnackBarOpen }) => {
  return (
    <div>
      <IconButton
        onClick={() => {
          deleteProduct();
          setSnackBarOpen(true);
        }}
        className={`${styles.cartItem_delete} hover:cursor-pointer`}
      >
        <RemoveFromCartIcon />
      </IconButton>
    </div>
  );
};

export default CartProductRemoveButton;
