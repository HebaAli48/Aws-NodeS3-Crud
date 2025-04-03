import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Copyright from "../components/ui/Copyright";

const Footer = () => {
  return (
    <AppBar position="static" sx={{ mt: "auto" }}>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Copyright textColor="white" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
