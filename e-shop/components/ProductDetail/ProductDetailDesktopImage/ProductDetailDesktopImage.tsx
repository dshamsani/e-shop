import type { FC } from "react";
import Image from "next/future/image";
import styles from "../../../styles/ProductDetailDesktop.module.scss";

interface IProductDetailDesktopImage {
  image: {
    id: string;
    filename_downoload: string;
  };
}

const ProductDetailDesktopImage: FC<IProductDetailDesktopImage> = ({ image }) => {
  const imageLink = process.env.NEXT_PUBLIC_ASSETS;

  const { id, filename_downoload } = image;

  return (
    <div className={`${styles.productDetail_image} min-w-[504px] max-w-[504px] max-h-[504px] min-h-[504px] relative`}>
      <Image
        src={`${imageLink}${id}/${filename_downoload}`}
        fill
        sizes="100%"
        priority={true}
        className="object-cover"
        alt={image.filename_downoload ? image.filename_downoload : "image"}
      />
    </div>
  );
};

export default ProductDetailDesktopImage;
