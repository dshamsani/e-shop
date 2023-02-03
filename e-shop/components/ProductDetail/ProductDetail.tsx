import type { FC } from "react";
import { useMediaQuery } from "@mui/material";
import ProductDetailDesktop from "./ProductDetailDesktop";
import ProductDetailMobile from "./ProductDetailMobile";
import type IProductDetail from "../../Interfaces/IProductDetail";

const ProductDetail: FC<IProductDetail> = ({ data }) => {
  const isDesktop = useMediaQuery("(min-width: 1080px)");

  return isDesktop ? <ProductDetailDesktop data={data} /> : <ProductDetailMobile data={data} />;
};

export default ProductDetail;
