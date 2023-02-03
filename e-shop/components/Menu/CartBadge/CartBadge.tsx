import type { FC } from "react";
import EmptyCartBadge from "./EmptyCartBadge";
import NotEmptyCartBadge from "./NotEmptyCartBadge";
import useCartBadge from "./useCartBadge";

const CartBadge: FC = () => {
  const { badgeCount } = useCartBadge();

  return <>{badgeCount !== 0 ? <NotEmptyCartBadge badgeCount={badgeCount} /> : <EmptyCartBadge badgeCount={badgeCount} />}</>;
};

export default CartBadge;
