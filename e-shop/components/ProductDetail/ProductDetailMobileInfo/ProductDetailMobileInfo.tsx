import type { FC } from "react";
import type IProductDetailItem from "../../../Interfaces/IProductDetailItem";
import ProductDetailMobileInfoDescription from "./ProductDetailMobileInfoDescription";
import ProductDetailMobileInfoImage from "./ProductDetailMobileInfoImage";

interface IProductDetailMobileInfo {
  data: IProductDetailItem;
}

const ProductDetailMobileInfo: FC<IProductDetailMobileInfo> = ({ data }) => {
  const { image, discription, quantity } = data;

  return (
    <div className=" max-w-full">
      <ProductDetailMobileInfoImage image={image} />
      <ProductDetailMobileInfoDescription discription={discription} quantity={quantity} />
    </div>
  );
};

export default ProductDetailMobileInfo;
