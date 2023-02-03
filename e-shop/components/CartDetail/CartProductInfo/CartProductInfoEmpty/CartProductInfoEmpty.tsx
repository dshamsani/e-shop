import { Button } from "@mui/material";
import Link from "next/link";
import type { FC } from "react";
import useCartDetail from "../../useCartDetail";

const CartProductInfoEmpty: FC = () => {
  const { t } = useCartDetail();

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-Lexon pb-5 font-bold text-[30px]">{t("CartIsEmpty")}</span>
      <Link href="/">
        <Button
          type="submit"
          sx={{ color: "#FFFFFF" }}
          className={`hover:bg-[#90a445] max-w-[222px] w-full min-h-[50px] bg-[#90a445]  rounded duration-[0.6s] font-DraftE text-[14px] leading-[1px]`}
        >
          {t("EmptyCartButton")}
        </Button>
      </Link>
    </div>
  );
};

export default CartProductInfoEmpty;
