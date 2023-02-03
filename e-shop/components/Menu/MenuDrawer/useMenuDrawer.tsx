import { useCallback, useState } from "react";

const useMenuDrawer = () => {
  const [isMenuOpen, setisMenuOpen] = useState<boolean>(false);

  const menuClicked = useCallback(
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if ((event as React.KeyboardEvent).key === "Esc") {
        return;
      }

      setisMenuOpen(!isMenuOpen);
    },
    [isMenuOpen]
  );

  return {
    menuClicked,
    isMenuOpen,
  };
};

export default useMenuDrawer;
