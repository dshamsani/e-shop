import { FormLabel, OutlinedInput } from "@mui/material";
import { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from "react";
import useCartDetailFormInput from "./useCartDetailFormInput";

interface ICartDetailFormInput {
  translateName: string;
  setState: Dispatch<SetStateAction<boolean>>;
  isDesktop: boolean;
  setcheckCartFormValidation: Dispatch<SetStateAction<boolean>>;
  value: string;
  setEmailString?: (value: SetStateAction<string>) => void;
  setNameString?: (value: SetStateAction<string>) => void;
  setSurnameString?: (value: SetStateAction<string>) => void;
  setMobileString?: (value: SetStateAction<string>) => void;
  setAdressString?: (value: SetStateAction<string>) => void;
}

const CartDetailFormInput: FC<ICartDetailFormInput> = ({
  translateName,
  setState,
  isDesktop,
  setcheckCartFormValidation,
  value,
  setEmailString,
  setNameString,
  setSurnameString,
  setMobileString,
  setAdressString,
}) => {
  const { t, formik, checkFormikValue, checkFormikError } = useCartDetailFormInput(setcheckCartFormValidation);

  useEffect(() => {
    switch (value) {
      case "email":
        formik.values.email?.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi) !== null ? setState(true) : setState(false);
        break;
      case "name":
        formik.values.name !== "" ? setState(true) : setState(false);
        break;
      case "surname":
        formik.values.surname !== "" ? setState(true) : setState(false);
        break;
      case "mobile":
        formik.values.mobile?.match(/^[0-9 ()+]+$/gi) !== null ? setState(true) : setState(false);
        break;
      case "adress":
        formik.values.adress !== "" ? setState(true) : setState(false);
        break;
      default:
        setState(false);
    }
  }, [checkFormikError, formik.values.adress, formik.values.email, formik.values.mobile, formik.values.name, formik.values.surname, setState, value]);

  return (
    <div className="h-full flex items-between flex-col">
      <FormLabel className="text-[14px] mb-[4px] font-DraftE font-semibold">{t(translateName)} *</FormLabel>
      <OutlinedInput
        type={value == "mobile" ? "mobile" : "text"}
        name={value}
        sx={{
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8aa431",
          },
          "&.MuiOutlinedInput-root": {
            backgroundColor: "none",
          },
        }}
        value={checkFormikValue(value)}
        onChange={(e) => {
          formik.handleChange(e);
          Boolean(value == "email") ? setEmailString(e.target.value) : null;
          Boolean(value == "name") ? setNameString(e.target.value) : null;
          Boolean(value == "surname") ? setSurnameString(e.target.value) : null;
          Boolean(value == "mobile") ? setMobileString(e.target.value) : null;
          Boolean(value == "adress") ? setAdressString(e.target.value) : null;
        }}
        onBlur={formik.handleBlur}
        className={`${isDesktop ? "min-w-[361px]" : "max-w-full"} mb-1 focus:outline-none   max-h-[40px] w-full`}
      />
      {checkFormikError(value) && <div className="text-red-600 pb-2 text-[14px] mb-1 font-DraftE font-semibold">{checkFormikError(value)}</div>}
    </div>
  );
};

export default CartDetailFormInput;
