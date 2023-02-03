import Link from "next/link";
import type { FC } from "react";
import styles from "../../../../../styles/ProductItem.module.scss";

interface IProductItemName {
  slug: string;
  name: string;
}

const ProductItemName: FC<IProductItemName> = ({ slug, name }) => {
  return (
    <div className={`${styles.productItem_name} px-[15px]`}>
      <Link href={`/product/${slug}`} locale="cs">
        <a className={` flex min-w-[226px] min-h-[95px] max-h-[95px] overflow-hidden leading-normal   text-3xl  font-Lexon text-left `}>
          <span className=" hover:cursor-pointer hover:text-ugoGreen duration-[0.6s]">{name}</span>
        </a>
      </Link>
    </div>
  );
};

export default ProductItemName;
