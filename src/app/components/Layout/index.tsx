// system imports
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import React from "react";

const navItems = [
  {
    title: "Blog",
    url: "/blog"
  }
];

interface ILayoutProps {
  //
}

export const Layout = ({
  children
}: React.PropsWithChildren<ILayoutProps>): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="a" href="/" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.url} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }} href={item.url}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};
