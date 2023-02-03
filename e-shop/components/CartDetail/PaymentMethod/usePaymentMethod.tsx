import { useTranslation } from "next-i18next";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { changeMethod } from "../../../store/slices/cartSlice";

const usePaymentMethod = () => {
  const { t } = useTranslation("common");

  const [selectedValue, setSelectedValue] = useState<string>("a");

  const dispatch = useAppDispatch();

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  }, []);

  useEffect(() => {
    dispatch(changeMethod(selectedValue));
  }, [dispatch, selectedValue]);

  return {
    t,
    selectedValue,
    setSelectedValue,
    dispatch,
    handleChange,
  };
};

export default usePaymentMethod;
