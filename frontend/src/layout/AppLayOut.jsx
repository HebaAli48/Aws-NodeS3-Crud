/* eslint-disable react/prop-types */
import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, Paper, Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const AppLayout = () => {
  const defaultTheme = createTheme({
    typography: {
      fontFamily: "Cairo, Arial, sans-serif",
    },
    direction: "rtl",
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Header />

        <Grid container component="main">
          <Grid item xs={12} style={{}}>
            <Box
              style={{
                minHeight: "80vh",
              }}
            >
              <Outlet />
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
