import type { FC } from "react";
import type IProductDetail from "../../Interfaces/IProductDetail";
import PositionedSnackbar from "../PositionalSnackbar";
import useProductDetail from "./useProductDetail";
import ProductDetailMobileCategory from "./ProductDetailMobileCategory";
import ProductDetailMobileName from "./ProductDetailMobileName";
import ProductDetailMobileInfo from "./ProductDetailMobileInfo";
import ProductDetailMobileActions from "./ProductDetailMobileActions";

const ProductDetailMobile: FC<IProductDetail> = ({ data }) => {
  const { t, name, price, category, snackBarOpen, setSnackBarOpen } = useProductDetail(data);

  return (
    <>
      <ProductDetailMobileCategory category={category} />
      <div className="mobile:p-2 tablet:p-5">
        <div className="flex max-w-[938px] max-h-[900px] flex-col bg-white mt-20 mb-20">
          <ProductDetailMobileName name={name} />
          <ProductDetailMobileInfo data={data} />
          <ProductDetailMobileActions t={t} setSnackBarOpen={setSnackBarOpen} data={data} />
        </div>
        <PositionedSnackbar type="add" text={t("snackBarAddToCart")} snackBarOpen={snackBarOpen} setSnackBarOpen={setSnackBarOpen} />
      </div>
    </>
  );
};

export default ProductDetailMobile;
