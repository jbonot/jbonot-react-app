// system imports
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import React from "react";

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};
