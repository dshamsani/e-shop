import { Badge, IconButton } from "@mui/material";
import { FC } from "react";
import CartIcon from "../../../../Icons/CartIcon";

interface IEmptyCartBadge {
  badgeCount: number;
}

const EmptyCartBadge: FC<IEmptyCartBadge> = ({ badgeCount }) => {
  return (
    <IconButton>
      <Badge badgeContent={badgeCount} sx={{ "& .MuiBadge-badge": { backgroundColor: "#64748B", color: "#FFFFFF" } }} showZero>
        <CartIcon />
      </Badge>
    </IconButton>
  );
};

export default EmptyCartBadge;
