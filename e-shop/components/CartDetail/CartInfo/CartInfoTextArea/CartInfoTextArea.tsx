import type { FC } from "react";
import useCartDetail from "../../useCartDetail";

interface ICartInfoTextArea {}

const CartInfoTextArea: FC<ICartInfoTextArea> = ({}) => {
  const { t } = useCartDetail();

  return (
    <>
      <p className="text-[14px] font-DraftE mt-[14px] mb-[5px]">{t("note")}:</p>
      <div className="pb-[20px]">
        <textarea
          cols={30}
          rows={3}
          name="customer_note"
          className="w-full p-5 text-[14px] focus:outline-none min-h-[42px] h-[105px] bg-transparent border-black border-[1px]"
        ></textarea>
      </div>
    </>
  );
};

export default CartInfoTextArea;
