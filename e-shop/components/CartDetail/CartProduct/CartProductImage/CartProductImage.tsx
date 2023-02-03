import type { FC } from "react";
import styles from "../../../../styles/CartDetail.module.scss";
import Image from "next/future/image";
import { useMediaQuery } from "@mui/material";

interface ICartProductImage {
  image: {
    id: string;
    filename_downoload: string;
  };
}

const CartProductImage: FC<ICartProductImage> = ({ image }) => {
  const imageLink = process.env.NEXT_PUBLIC_ASSETS;

  const isDesktop = useMediaQuery<boolean>("(min-width: 670px)");

  const { id, filename_downoload } = image;

  return (
    <div
      className={`${
        isDesktop
          ? `${styles.cartItem_image} relative !p-0 min-w-[100px] min-h-[100px] w-full h-full`
          : `${styles.cartProductMobile_image} relative !p-0 min-w-[100px] max-h-[100px] w-full h-full`
      }`}
    >
      <Image src={`${imageLink}${id}/${filename_downoload}`} fill sizes="100%" priority={true} className="objectfit-contain " alt="image" />
    </div>
  );
};

export default CartProductImage;
