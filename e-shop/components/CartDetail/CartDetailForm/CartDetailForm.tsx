import { Formik } from "formik";
import type { Dispatch, FC, SetStateAction } from "react";
import styles from "../../../styles/CartDetail.module.scss";
import CartDetailFormInput from "./CartDetailFormInput";
import useCartDetailForm from "./useCartDetailForm";

interface ICartDetailForm {
  setcheckCartFormValidation: Dispatch<SetStateAction<boolean>>;
}

const CartDetailForm: FC<ICartDetailForm> = ({ setcheckCartFormValidation }) => {
  const {
    t,
    isDesktop,
    isNotMobile,
    setName,
    setSurname,
    setEmail,
    setNumber,
    setAdress,
    setEmailString,
    setNameString,
    setSurnameString,
    setMobileString,
    setAdressString,
  } = useCartDetailForm(setcheckCartFormValidation);

  return (
    <div className="mt-[65px]  w-full pt-[10px]">
      <h2 className={`${styles.productInfo} font-Lexon font-bold text-[30px]  pb-[15px] mt-[20px] flex self-start`}>{t("deliveryDestination")}</h2>
      <div className=" w-full">
        <div className={`${isNotMobile ? styles.form : styles.formMobile} w-full h-full`}>
          <CartDetailFormInput
            translateName="name"
            setState={setName}
            isDesktop={isDesktop}
            setcheckCartFormValidation={setcheckCartFormValidation}
            value="name"
            setNameString={setNameString}
          />
          <CartDetailFormInput
            translateName="surname"
            setState={setSurname}
            isDesktop={isDesktop}
            setcheckCartFormValidation={setcheckCartFormValidation}
            value="surname"
            setSurnameString={setSurnameString}
          />
          <CartDetailFormInput
            translateName="E-mail"
            setState={setEmail}
            isDesktop={isDesktop}
            setcheckCartFormValidation={setcheckCartFormValidation}
            value="email"
            setEmailString={setEmailString}
          />
          <CartDetailFormInput
            translateName="mobile"
            setState={setNumber}
            isDesktop={isDesktop}
            setcheckCartFormValidation={setcheckCartFormValidation}
            value="mobile"
            setMobileString={setMobileString}
          />
          <CartDetailFormInput
            translateName="adress"
            setState={setAdress}
            isDesktop={isDesktop}
            setcheckCartFormValidation={setcheckCartFormValidation}
            value="adress"
            setAdressString={setAdressString}
          />
        </div>
      </div>
    </div>
  );
};

export default CartDetailForm;
