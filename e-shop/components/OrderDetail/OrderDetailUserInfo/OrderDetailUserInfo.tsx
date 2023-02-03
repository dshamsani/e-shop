import { FormLabel } from "@mui/material";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import styles from "../../../styles/OrderDetailUserInfo.module.scss";

interface IOrderDetailUserInfo {
  userInfo: {
    name: string;
    surname: string;
    email: string;
    mobile: string;
    adress: string;
  };
}

const OrderDetailUserInfo: FC<IOrderDetailUserInfo> = ({ userInfo }) => {
  const { t } = useTranslation("common");
  return (
    <div className={`${styles.userInfo} w-full max-h-[400px] h-full`}>
      <div className={`${styles.userInfo_name} flex items-center flex-col`}>
        <FormLabel className="text-[14px] mb-[4px] font-DraftE font-semibold">{t("name")}</FormLabel>
        <span className="text-[16px] mb-[4px] font-DraftE font-normal">{userInfo?.name}</span>
      </div>
      <div className={`${styles.userInfo_surname} flex items-center flex-col`}>
        <FormLabel className="text-[14px] mb-[4px] font-DraftE font-semibold">{t("surname")}</FormLabel>
        <span className="text-[16px] mb-[4px] font-DraftE font-normal">{userInfo?.surname}</span>
      </div>
      <div className={`${styles.userInfo_email} flex items-center flex-col`}>
        <FormLabel className="text-[14px] mb-[4px] font-DraftE font-semibold">{t("E-mail")}</FormLabel>
        <span className="text-[16px] mb-[4px] font-DraftE font-normal">{userInfo?.email}</span>
      </div>
      <div className={`${styles.userInfo_mobile} flex items-center flex-col`}>
        <FormLabel className="text-[14px] mb-[4px] font-DraftE font-semibold">{t("mobile")}</FormLabel>
        <span className="text-[16px] mb-[4px] font-DraftE font-normal">{userInfo?.mobile}</span>
      </div>
      <div className={`${styles.userInfo_adress} flex items-center flex-col`}>
        <FormLabel className="text-[14px] mb-[4px] font-DraftE font-semibold">{t("adress")}</FormLabel>
        <span className="text-[16px] mb-[4px] font-DraftE font-normal">{userInfo?.adress}</span>
      </div>
    </div>
  );
};

export default OrderDetailUserInfo;
