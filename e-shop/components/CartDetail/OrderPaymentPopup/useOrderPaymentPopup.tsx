import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useCallback } from "react";
import { useAppDispatch } from "../../../store/hooks";

const useOrderPaymentPoput = (setPopupOpen: Dispatch<SetStateAction<boolean>>, hash: string) => {
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleClose = useCallback(() => {
    if (hash !== "" && hash !== undefined) {
      router.push("/");
    } else {
      setPopupOpen(false);
    }
  }, [hash, router, setPopupOpen]);

  return {
    t,
    handleClose,
    dispatch,
  };
};

export default useOrderPaymentPoput;
