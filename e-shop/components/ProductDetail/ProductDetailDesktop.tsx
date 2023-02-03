import type { FC } from "react";
import ProductDetailDesktopButtons from "./ProductDetailDesktopButtons/ProductDetailDesktopButtons";
import type IProductDetail from "../../Interfaces/IProductDetail";
import styles from "../../styles/ProductDetailDesktop.module.scss";
import PositionedSnackbar from "../PositionalSnackbar";
import useProductDetail from "./useProductDetail";
import ProductDetailDesktopCategory from "./ProductDetailDesktopCategory";
import ProductDetailDesktopImage from "./ProductDetailDesktopImage";
import ProductDetailDsktopName from "./ProductDetailDsktopName";
import ProductDetailDesktopDscription from "./ProductDetailDesktopDscription";
import ProductDetailDesktopPrice from "./ProductDetailDesktopPrice";

const ProductDetailDesktop: FC<IProductDetail> = ({ data }) => {
  const { t, name, discription, image, price, quantity, category, snackBarOpen, setSnackBarOpen } = useProductDetail(data);

  return (
    <>
      <ProductDetailDesktopCategory category={category} />
      <div className="px-16">
        <div className={` mx-[15px] pr-5 bg-white mt-[100px] mb-[185px] max-w-[1200px]`}>
          <div className={`${styles.container} relative items-center`}>
            <ProductDetailDesktopImage image={image} />
            <ProductDetailDsktopName name={name} />
            <ProductDetailDesktopDscription discription={discription} quantity={quantity} />
            <ProductDetailDesktopPrice t={t} price={price} />
            <ProductDetailDesktopButtons data={data} setSnackBarOpen={setSnackBarOpen} />
          </div>
        </div>
        <PositionedSnackbar type="add" text={t("snackBarAddToCart")} snackBarOpen={snackBarOpen} setSnackBarOpen={setSnackBarOpen} />
      </div>
    </>
  );
};

export default ProductDetailDesktop;
