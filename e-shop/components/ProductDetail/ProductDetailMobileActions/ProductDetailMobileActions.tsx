import type { TFunction } from "i18next";
import type { Dispatch, FC, SetStateAction } from "react";
import type IProductDetailItem from "../../../Interfaces/IProductDetailItem";
import ProductDetailDesktopButtons from "../ProductDetailDesktopButtons";
import ProductDetailMobileActionsPrice from "./ProductDetailMobileActionsPrice";

interface IProductDetailMobileActions {
  data: IProductDetailItem;
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
  t: TFunction<"common", undefined>;
}

const ProductDetailMobileActions: FC<IProductDetailMobileActions> = ({ data, setSnackBarOpen, t }) => {
  const { price } = data;

  return (
    <div>
      <div className="flex flex-col desktop:min-h-[200px] justify-center items-center">
        <ProductDetailMobileActionsPrice price={price} t={t} />
        <ProductDetailDesktopButtons data={data} setSnackBarOpen={setSnackBarOpen} />
      </div>
    </div>
  );
};

export default ProductDetailMobileActions;
