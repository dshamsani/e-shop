import type { FC } from "react";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import MenuIcon from "../../../Icons/MenuIcon";
import HomeIcon from "../../../Icons/HomeIcon";
import Link from "next/link";
import useMenuDrawer from "./useMenuDrawer";
import type { IMenu } from "../Menu";
import CategoryIcon from "../../../Icons/CategoryIcon";
import { useTranslation } from "next-i18next";

const MenuDrawer: FC<IMenu> = ({ data }) => {
  const { menuClicked, isMenuOpen } = useMenuDrawer();
  const { t } = useTranslation("common");

  return (
    <div>
      <IconButton onClick={menuClicked()} aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      {isMenuOpen && (
        <Fragment>
          <SwipeableDrawer anchor={"right"} open={isMenuOpen} onClose={menuClicked()} onOpen={menuClicked()}>
            <Box sx={{ width: 250 }} role="presentation" onClick={menuClicked()} onKeyDown={menuClicked()}>
              <List>
                <Link href="/">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary={`${t("header")}`} />
                    </ListItemButton>
                  </ListItem>
                </Link>
                {data?.categories.map((item, i) => {
                  return (
                    <Link href={`/category/${item.slug}`} key={i}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <CategoryIcon />
                          </ListItemIcon>
                          <ListItemText primary={item.category_name} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  );
                })}
              </List>
            </Box>
          </SwipeableDrawer>
        </Fragment>
      )}
    </div>
  );
};

export default MenuDrawer;
