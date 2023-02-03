import { useTranslation } from "next-i18next";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import useCartDetailForm from "../useCartDetailForm";

const useCartDetailFormInput = (setcheckCartFormValidation: Dispatch<SetStateAction<boolean>>) => {
  const { t } = useTranslation("common");
  const { formik, userInfo } = useCartDetailForm(setcheckCartFormValidation);

  const checkFormikValue = useCallback(
    (value: string): string => {
      switch (value) {
        case "name":
          return formik.values.name;
        case "surname":
          return formik.values.surname;
        case "email":
          return formik.values.email;
        case "mobile":
          return formik.values.mobile;
        case "adress":
          return formik.values.adress;
        default:
          return "";
      }
    },
    [formik.values.adress, formik.values.email, formik.values.mobile, formik.values.name, formik.values.surname]
  );

  const checkFormikError = useCallback(
    (value: string): string | boolean => {
      switch (value) {
        case "name":
          return formik.errors.name;
        case "surname":
          return formik.errors.surname;
        case "email":
          return formik.errors.email;
        case "mobile":
          return formik.errors.mobile;
        case "adress":
          return formik.errors.adress;
        default:
          return false;
      }
    },
    [formik.errors.adress, formik.errors.email, formik.errors.mobile, formik.errors.name, formik.errors.surname]
  );
  return {
    t,
    formik,
    checkFormikValue,
    checkFormikError,
    userInfo,
  };
};

export default useCartDetailFormInput;
