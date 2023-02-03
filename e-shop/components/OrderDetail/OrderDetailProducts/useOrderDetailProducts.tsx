import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

const useOrderDetailProducts = () => {
  const { t } = useTranslation("common");

  const imageLink = process.env.NEXT_PUBLIC_ASSETS;

  const isDesktop = useMediaQuery<boolean>("(min-width: 600px)");

  return {
    t,
    imageLink,
    isDesktop,
  };
};

export default useOrderDetailProducts;
