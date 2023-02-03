import { forwardRef } from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import type { Dispatch, FC, SetStateAction } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import usePositionalSnackbar from "./usePositionalSnackbar";

export interface State extends SnackbarOrigin {}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ISnackBar {
  setSnackBarOpen: Dispatch<SetStateAction<boolean>>;
  snackBarOpen: boolean;
  text: string;
  type: "add" | "remove";
}

const PositionedSnackbar: FC<ISnackBar> = ({ setSnackBarOpen, snackBarOpen, text, type }) => {
  const { vertical, horizontal, handleClose } = usePositionalSnackbar(setSnackBarOpen);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={snackBarOpen}
        onClose={handleClose}
        sx={{ backgroundColor: "#fff" }}
        key={vertical + horizontal}
        autoHideDuration={1300}
      >
        {type == "add" ? (
          <Alert onClose={handleClose} severity="success" className="text-[#f3f1eb] color-white bg-[#8aa43a]" sx={{ width: "100%" }}>
            {text}
          </Alert>
        ) : (
          <Alert onClose={handleClose} sx={{ width: "100%" }} severity="error">
            {text}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default PositionedSnackbar;
