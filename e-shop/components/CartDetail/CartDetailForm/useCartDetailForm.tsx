import { useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "next-i18next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import * as yup from "yup";
import { changeUserInfo } from "../../../store/slices/cartSlice";

const useCartDetailForm = (setcheckCartFormValidation: Dispatch<SetStateAction<boolean>>) => {
  const { t } = useTranslation("common");

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isNotMobile = useMediaQuery("(min-width: 650px)");

  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.cartReducer.userInfo);

  const [name, setName] = useState<boolean>(false);
  const [surname, setSurname] = useState<boolean>(false);
  const [email, setEmail] = useState<boolean>(false);
  const [number, setNumber] = useState<boolean>(false);
  const [adress, setAdress] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [emailString, setEmailString] = useState<string | null>(null);
  const [nameString, setNameString] = useState<string | null>(null);
  const [surnameString, setSurnameString] = useState<string | null>(null);
  const [mobileString, setMobileString] = useState<string | null>(null);
  const [adressString, setAdressString] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      name: userInfo?.name,
      surname: userInfo?.surname,
      email: userInfo?.email,
      adress: userInfo?.adress,
      mobile: userInfo?.mobile,
    },
    onSubmit: () => {
      setMessage(t("submittedForm"));
    },
    validateOnChange: true,
    validationSchema: yup.object({
      name: yup.string().trim().required(t("formNameRequire")),
      surname: yup.string().trim().required(t("formSurnameRequire")),
      email: yup.string().trim().email(t("FormEmailValidation")).required(t("formEmailRequire")),
      mobile: yup
        .string()
        .typeError(t("formMobileError"))
        .matches(/^[0-9 ()+]+$/, t("formMobileValidation"))
        .trim()
        .required(t("formMobileRequire")),
      adress: yup.string().trim().required(t("formAdressRequire")),
    }),
  });

  useEffect(() => {
    const emailFilter = emailString !== null ? emailString : userInfo.email;
    const nameFilter = nameString !== null ? nameString : userInfo.name;
    const surnameFilter = surnameString !== null ? surnameString : userInfo.surname;
    const mobileFilter = mobileString !== null ? mobileString : userInfo.mobile;
    const adressFilter = adressString !== null ? adressString : userInfo.adress;

    dispatch(changeUserInfo({ email: emailFilter, name: nameFilter, surname: surnameFilter, mobile: mobileFilter, adress: adressFilter }));

    if (name && surname && email && number && adress) {
      setcheckCartFormValidation(false);
    } else {
      setcheckCartFormValidation(true);
    }
  }, [
    name,
    surname,
    email,
    number,
    adress,
    setcheckCartFormValidation,
    dispatch,
    emailString,
    nameString,
    surnameString,
    mobileString,
    adressString,
    userInfo.email,
    userInfo.name,
    userInfo.surname,
    userInfo.mobile,
    userInfo.adress,
  ]);

  return {
    t,
    isDesktop,
    isNotMobile,
    setName,
    setSurname,
    setEmail,
    setNumber,
    setAdress,
    setEmailString,
    formik,
    setNameString,
    setSurnameString,
    setMobileString,
    setAdressString,
    userInfo,
  };
};

export default useCartDetailForm;
