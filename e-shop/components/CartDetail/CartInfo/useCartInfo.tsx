import { useTranslation } from "next-i18next";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

const useCartInfo = (setcheckBuisnessTermsChecked: Dispatch<SetStateAction<boolean>>) => {
  const { t } = useTranslation("common");

  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (checked) {
      setcheckBuisnessTermsChecked(false);
    } else {
      setcheckBuisnessTermsChecked(true);
    }
  }, [checked, setcheckBuisnessTermsChecked]);

  return {
    t,
    checked,
    setChecked,
  };
};

export default useCartInfo;
