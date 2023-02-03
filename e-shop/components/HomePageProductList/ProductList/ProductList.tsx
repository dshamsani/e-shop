import type { FC } from "react";
import type IProductList from "../../../Interfaces/IProductList";
import ProductItem from "./ProductItem/ProductItem";

const ProductList: FC<IProductList> = ({ data }) => {
  return (
    <div className="grid self-center grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-3">
      {data.map((item) => {
        const { id } = item;
        return <ProductItem key={id} data={item} />;
      })}
    </div>
  );
};

export default ProductList;
