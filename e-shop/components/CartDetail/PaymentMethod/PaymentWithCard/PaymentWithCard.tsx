import { FormControlLabel, Radio } from "@mui/material";
import { useTranslation } from "next-i18next";
import type { FC } from "react";

interface IPaymentWithCard {
  selectedValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentWithCard: FC<IPaymentWithCard> = ({ selectedValue, handleChange }) => {
  const { t } = useTranslation("common");

  return (
    <FormControlLabel
      sx={{
        ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": { color: "#8aa431" },
        ".css-vqmohf-MuiButtonBase-root-MuiRadio-root:hover": { backgroundColor: "rgba(138, 164, 49, 0.1)" },
      }}
      checked={selectedValue === "a"}
      onChange={handleChange}
      value="a"
      control={<Radio />}
      label={<span className="font-Lexon text-[18px]">{t("payWithCard")}</span>}
    />
  );
};

export default PaymentWithCard;
