import type { FC } from "react";
import type IProduct from "../../../../Interfaces/IProduct";
import styles from "../../../../styles/ProductItem.module.scss";
import PositionedSnackbar from "../../../PositionalSnackbar/PositionalSnackbar";
import useProductItem from "./useProductItem";
import ProductItemImage from "./ProductItemImage";
import ProductItemName from "./ProductItemName";
import ProductItemInfo from "./ProductItemInfo";

const ProductItem: FC<IProduct> = ({ data }) => {
  const { t, slug, image, name, snackBarOpen, setSnackBarOpen } = useProductItem(data);

  return (
    <div>
      <div
        className={`${styles.productItem} min-h-[508px] min-w-[256px] bg-[#fff] max-w-[256px] w-full h-full relative hover:-translate-x-[2px] shadow-default hover:shadow-hover duration-[0.6s]  rounded-lg`}
      >
        <ProductItemImage image={image} slug={slug} />
        <ProductItemName slug={slug} name={name} />
        <ProductItemInfo data={data} setSnackBarOpen={setSnackBarOpen} />
      </div>
      <PositionedSnackbar type="add" text={t("snackBarAddToCart")} snackBarOpen={snackBarOpen} setSnackBarOpen={setSnackBarOpen} />
    </div>
  );
};

export default ProductItem;
