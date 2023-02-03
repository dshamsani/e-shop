import { FC } from "react";
import styles from "../../../../styles/CartDetail.module.scss";
import CartProduct from "../../CartProduct/CartProduct";
import useCartDetail from "../../useCartDetail";
import type { Dispatch, SetStateAction } from "react";

interface ICartProductInfoNotEmpty {
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
}

const CartProductInfoNotEmpty: FC<ICartProductInfoNotEmpty> = ({ setSnackBarOpen }) => {
  const { loading, data, t } = useCartDetail();

  return (
    <div>
      <h2 className={`${styles.productInfo} font-Lexon font-bold text-[30px] pb-[15px] mt-[20px] flex self-start`}>{t("cartInfo")}</h2>
      <div className="w-full h-full">
        {!loading && data?.products.map((item, i) => <CartProduct setSnackBarOpen={setSnackBarOpen} data={item} key={i} />)}
      </div>
    </div>
  );
};

export default CartProductInfoNotEmpty;
