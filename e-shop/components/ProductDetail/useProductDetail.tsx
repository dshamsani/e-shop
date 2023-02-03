import { useTranslation } from "next-i18next";
import { useState } from "react";
import type IProductDetailItem from "../../Interfaces/IProductDetailItem";

const useProductDetail = (data: IProductDetailItem) => {
  const { name, discription, image, price, quantity, category } = data;

  const { t } = useTranslation("common");

  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);

  return {
    name,
    discription,
    image,
    price,
    quantity,
    category,
    t,
    snackBarOpen,
    setSnackBarOpen,
  };
};

export default useProductDetail;
