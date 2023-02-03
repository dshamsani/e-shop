import { FormControlLabel, Radio } from "@mui/material";
import { useTranslation } from "next-i18next";
import type { ChangeEvent, FC } from "react";

interface IPaymentWithCash {
  selectedValue: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PaymentWithCash: FC<IPaymentWithCash> = ({ selectedValue, handleChange }) => {
  const { t } = useTranslation();

  return (
    <FormControlLabel
      sx={{
        ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": { color: "#8aa431" },
        ".css-vqmohf-MuiButtonBase-root-MuiRadio-root:hover": { backgroundColor: "rgba(138, 164, 49, 0.1)" },
      }}
      checked={selectedValue === "b"}
      onChange={handleChange}
      value="b"
      control={<Radio />}
      label={<span className="font-Lexon text-[18px]">{t("payOnTill")}</span>}
    />
  );
};

export default PaymentWithCash;
