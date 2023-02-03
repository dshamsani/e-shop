import type { FC } from "react";
import type { IProductitem } from "../../Interfaces/IProductItem";
import ProductList from "./ProductList";

interface IHomePageProductList {
  data: Array<IProductitem>;
  name?: string;
}

const HomePageProductList: FC<IHomePageProductList> = ({ data, name = "Nákupní seznam" }) => {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="mb-8 text-center font-Lexon font-thin text-[52px]">{name}</h3>
      <ProductList data={data} />
    </div>
  );
};

export default HomePageProductList;
