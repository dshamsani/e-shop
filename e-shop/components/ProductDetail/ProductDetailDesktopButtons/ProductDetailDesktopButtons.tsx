import type { FC } from "react";
import { Button, IconButton } from "@mui/material";
import AddIcon from "../../../Icons/AddIcon";
import RemoveIcon from "../../../Icons/RemoveIcon";
import useProductDetailDesktopButtons from "./useProductDetailDesktopButtons";
import type ICartItem from "../../../Interfaces/ICartItem";
import { useTranslation } from "next-i18next";

const ProductDetailDesktopButtons: FC<ICartItem> = ({ data, setSnackBarOpen }) => {
  const { t } = useTranslation("common");
  const { AddToCart, count, addProductCount, removeProductCount } = useProductDetailDesktopButtons();

  return (
    <div className="mt-4 flex px-6 desktop:px-0  min-w-full text-left mb-5 ">
      <div className="flex items-center ">
        <IconButton onClick={removeProductCount}>
          <RemoveIcon />
        </IconButton>
        <span className="text-md font-semibold text-center  mr-2">{count}</span>
        <IconButton onClick={addProductCount}>
          <AddIcon />
        </IconButton>
      </div>
      <Button
        onClick={() => {
          AddToCart(data);
          setSnackBarOpen(true);
        }}
        disableRipple={true}
        sx={{
          "&.MuiButton-root:hover": { backgroundColor: "#8aa431" },
          "&.MuiButton-root": {
            backgroundColor: "#8aa431",
            borderRadius: "8px",
            color: "#FFFFFF",
            fontFamily: "DraftE",
            textTransform: "none",
            fontSize: "18px",
            lineHeight: "28px",
            marginLeft: "16px",
            padding: "8px 16px 8px 16px",
          },
        }}
      >
        {t("addToCart")}
      </Button>
    </div>
  );
};

export default ProductDetailDesktopButtons;
