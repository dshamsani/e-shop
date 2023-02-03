import { Button } from "@mui/material";
import type { TFunction } from "i18next";
import type { Dispatch, FC, SetStateAction } from "react";
import type { IProductitem } from "../../../../../../Interfaces/IProductItem";

interface IProductItemInfoButton {
  AddToCart: (data: IProductitem) => void;
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
  t: TFunction<"common", undefined>;
  data: IProductitem;
}

const ProductItemInfoButton: FC<IProductItemInfoButton> = ({ AddToCart, setSnackBarOpen, t, data }) => {
  return (
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
        },
      }}
    >
      {t("addToCart")}
    </Button>
  );
};

export default ProductItemInfoButton;
