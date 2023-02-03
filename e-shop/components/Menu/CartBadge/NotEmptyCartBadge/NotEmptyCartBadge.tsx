import { Badge, IconButton } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import CartIcon from "../../../../Icons/CartIcon";

interface INotEmptyCartBadge {
  badgeCount: number;
}

const NotEmptyCartBadge: FC<INotEmptyCartBadge> = ({ badgeCount }) => {
  return (
    <Link
      href={{
        pathname: `/cart`,
        query: {
          count: badgeCount,
        },
      }}
      as={`/cart`}
      passHref
    >
      <IconButton>
        <Badge badgeContent={badgeCount} sx={{ "& .MuiBadge-badge": { backgroundColor: "#64748B", color: "#FFFFFF" } }} showZero>
          <CartIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default NotEmptyCartBadge;
