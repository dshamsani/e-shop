import { useAppSelector } from "../../../store/hooks";

const useCartBadge = () => {
  const productCount = useAppSelector((state) => state.productReducer.productCount);

  let badgeCount = 0;
  productCount.map((item) => {
    badgeCount = badgeCount + item.productCount;
  });

  return {
    badgeCount,
  };
};

export default useCartBadge;
