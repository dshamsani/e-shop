import Link from "next/link";
import type { FC } from "react";

interface IProductDetailDesktopCategory {
  category: {
    slug: string;
    category_name: string;
    category_id: number;
  };
}

const ProductDetailDesktopCategory: FC<IProductDetailDesktopCategory> = ({ category }) => {
  const { slug, category_name } = category;

  return (
    <Link href={`/category/${slug}`}>
      <a className="font-Lexon px-16 mt-10 font-normal text-[40px] hover:cursor-pointer hover:text-ugoGreen duration-[0.6s] leading-[normal] max-w-[601px] max-h-[60px]">
        {category_name}
      </a>
    </Link>
  );
};

export default ProductDetailDesktopCategory;
