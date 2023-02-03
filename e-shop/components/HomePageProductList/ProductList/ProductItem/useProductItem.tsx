import { useTranslation } from "next-i18next";
import { useState } from "react";
import type { IProductitem } from "../../../../Interfaces/IProductItem";

const useProductItem = (data: IProductitem) => {
  const { t } = useTranslation("common");

  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);

  const { slug, image, name, price } = data;

  return {
    t,
    slug,
    image,
    name,
    snackBarOpen,
    setSnackBarOpen,
    price,
  };
};

export default useProductItem;
