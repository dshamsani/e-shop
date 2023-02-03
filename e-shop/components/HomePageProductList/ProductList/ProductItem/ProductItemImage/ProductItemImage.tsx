import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import styles from "../../../../../styles/ProductItem.module.scss";
import Image from "next/future/image";

interface IProductItemImage {
  slug: string;
  image: {
    id: string;
    filename_downoload: string;
  };
}

const ProductItemImage: FC<IProductItemImage> = ({ slug, image }) => {
  const [paddingTop, setPaddingTop] = useState<string>("0");
  const imageLink = process.env.NEXT_PUBLIC_ASSETS;

  const { id, filename_downoload } = image;

  return (
    <div className={`${styles.productItem_image} relative w-full h-[280px] mb-[10px]`}>
      <Link href={`/product/${slug}`} locale="cs">
        <a>
          <Image
            src={`${imageLink}${id}/${filename_downoload}`}
            fill
            sizes="100%"
            priority={true}
            className="object-fill"
            alt={filename_downoload ? filename_downoload : "image"}
            onLoad={({ target }) => {
              const { naturalWidth, naturalHeight } = target as HTMLImageElement;
              setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
            }}
          />
        </a>
      </Link>
    </div>
  );
};

export default ProductItemImage;
