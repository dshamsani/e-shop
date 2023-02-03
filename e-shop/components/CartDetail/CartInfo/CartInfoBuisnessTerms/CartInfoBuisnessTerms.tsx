import { Checkbox, FormControlLabel } from "@mui/material";
import type { Dispatch, FC, SetStateAction } from "react";
import useCartDetail from "../../useCartDetail";

interface ICartInfoBuisnessTerms {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

const CartInfoBuisnessTerms: FC<ICartInfoBuisnessTerms> = ({ checked, setChecked }) => {
  const { t } = useCartDetail();
  return (
    <div className="flex items-center justify-start mb-[10px] min-h-[21px] max-h-[21px] h-full">
      <FormControlLabel
        className="max-h-[21px]"
        onChange={() => setChecked(!checked)}
        control={<Checkbox className="max-h-[21px]" disableRipple={true} />}
        label={
          <span className="ml-[7px] text-[14px] min-h-full w-full font-DraftE">
            {t("businessTermsPartOne")}{" "}
            <a href="https://www.ugo.cz/obchodni-podminky" className="color-black underline" target="_blank" rel="noreferrer">
              {t("businessTermsPartTwo")}{" "}
            </a>
            {t("businessTermsPartThree")}{" "}
            <a href="https://ochrana-osobnich-udaju.ugo.cz/" className="color-black underline" target="_blank" rel="noreferrer">
              {t("businessTermsPartFour")}
            </a>
          </span>
        }
      />
    </div>
  );
};

export default CartInfoBuisnessTerms;
