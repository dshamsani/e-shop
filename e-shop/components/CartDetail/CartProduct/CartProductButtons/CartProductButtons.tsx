import { IconButton } from "@mui/material";
import type { FC } from "react";
import AddIcon from "../../../../Icons/AddIcon";
import RemoveIcon from "../../../../Icons/RemoveIcon";
import styles from "../../../../styles/CartDetail.module.scss";

interface ICartProductButtons {
  removeOrAddProductCount: () => void;
  addProductCount: () => void;
  count: number;
}

const CartProductButtons: FC<ICartProductButtons> = ({ removeOrAddProductCount, addProductCount, count }) => {
  return (
    <div className={`${styles.cartItem_quantity} flex justify-center items-center min-h-[32px]`}>
      <IconButton onClick={removeOrAddProductCount}>{<RemoveIcon />}</IconButton>
      <span className=" m-0 text-center text-black font-bold  text-[16px]">{count}</span>
      <IconButton onClick={addProductCount}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default CartProductButtons;
