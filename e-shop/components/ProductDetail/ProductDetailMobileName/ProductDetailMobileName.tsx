import type { FC } from "react";

interface IProductDetailMobileName {
  name: string;
}

const ProductDetailMobileName: FC<IProductDetailMobileName> = ({ name }) => (
  <span className=" mt-10 px-8  mb-5 p-2 text-6xl  font-Lexon  desktop:font-bold text-center">{name}</span>
);

export default ProductDetailMobileName;
