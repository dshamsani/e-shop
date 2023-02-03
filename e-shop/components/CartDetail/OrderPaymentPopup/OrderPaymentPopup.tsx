import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import AnimatedErrorIcon from "../../../Icons/AnimatedErrorIcon";
import AnimatedSuccesIcon from "../../../Icons/AnimatedSuccesIcon";
import MoreInfoButton from "../../MoreInfoButton";
import useOrderPaymentPoput from "./useOrderPaymentPopup";

interface IOrderPaymentPopup {
  payment: boolean;
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
  opened: boolean;
  hash: string;
}

const OrderPaymentPopup: FC<IOrderPaymentPopup> = ({ payment, setPopupOpen, opened, hash }) => {
  const { t, handleClose } = useOrderPaymentPoput(setPopupOpen, hash);

  return (
    <div>
      <Dialog open={opened} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" className="text-center text-[30px] font-Lexon">
          {payment ? t("orderSuccess") : t("orderError")}
        </DialogTitle>
        <DialogContent className=" flex justify-center">{payment ? <AnimatedSuccesIcon /> : <AnimatedErrorIcon />}</DialogContent>
        <div className="flex justify-around max-w-[600px] w-full max-h-[53px] h-full p-2 ">
          <Link href="/" className="no-underline">
            <a className="text-ugoGreen text-center no-underline">
              <MoreInfoButton text={t("continueShoping")} />
            </a>
          </Link>
          {payment && (
            <Link
              href={{
                pathname: `/order/${hash}`,
              }}
              as={`/order/${hash}`}
              className="no-underline"
            >
              <a className="text-ugoGreen no-underline">
                <MoreInfoButton text={t("orderDetail")} />
              </a>
            </Link>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default OrderPaymentPopup;
