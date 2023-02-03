import { Dispatch, SetStateAction, useCallback } from "react";

const usePositionalSnackbar = (setSnackBarOpen: Dispatch<SetStateAction<boolean>>) => {
  const vertical: "bottom" | "top" = "bottom";
  const horizontal: "right" | "left" = "right";

  const handleClose = useCallback(() => {
    setSnackBarOpen(false);
  }, [setSnackBarOpen]);

  return {
    vertical,
    horizontal,
    handleClose,
  };
};

export default usePositionalSnackbar;
