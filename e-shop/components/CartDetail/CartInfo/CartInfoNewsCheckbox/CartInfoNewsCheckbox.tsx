import { Checkbox, FormControlLabel } from "@mui/material";
import type { FC } from "react";
import useCartDetail from "../../useCartDetail";

const CartInfoNewsCheckbox: FC = ({}) => {
  const { t } = useCartDetail();

  return (
    <div className=" flex items-center justify-start min-h-[21px] max-h-[21px] h-full">
      <FormControlLabel
        className="max-h-[21px]"
        control={<Checkbox className="max-h-[21px]" disableRipple={true} />}
        label={<span className="ml-[7px] text-[14px] min-h-full w-full font-DraftE">{t("newsSeller")}</span>}
      />
    </div>
  );
};

export default CartInfoNewsCheckbox;
