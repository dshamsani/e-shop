import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import type { FC } from "react";
import styles from "../../../../styles/CartDetail.module.scss";

interface ICartProductName {
  slug: string;
  name: string;
}

const CartProductName: FC<ICartProductName> = ({ slug, name }) => {
  const isDesktop = useMediaQuery<boolean>("(min-width: 670px)");

  return (
    <div className={`${isDesktop ? styles.cartItem_name : styles.cartProductMobile_name} max-w-[160px] max-h-[60px] !w-full !h-full`}>
      <Link href={`/product/${slug}`}>
        <a className="hover:cursor-pointer hover:text-ugoGreen duration-[0.6s] font-Lexon text-[20px]">{name}</a>
      </Link>
    </div>
  );
};

export default CartProductName;
