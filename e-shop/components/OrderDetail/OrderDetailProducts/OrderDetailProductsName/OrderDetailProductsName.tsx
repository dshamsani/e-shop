import Link from "next/link";
import type { FC } from "react";

interface IOrderDetailProductsName {
  name: string;
  slug: string;
}

const OrderDetailProductsName: FC<IOrderDetailProductsName> = ({ name, slug }) => {
  return (
    <div className=" max-w-[350px] max-h-[60px]  text-center !w-full !h-full">
      <Link href={`/product/${slug}`}>
        <a className={`hover:cursor-pointer hover:text-ugoGreen duration-[0.6s] font-Lexon text-[20px]`}>{name}</a>
      </Link>
    </div>
  );
};

export default OrderDetailProductsName;
