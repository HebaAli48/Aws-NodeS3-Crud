import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = ({ textColor = "secondary" }) => {
  const currentYear = new Date().getFullYear(); // Get the current year in English

  return (
    <Typography
      variant="body2"
      align="center"
      sx={{ color: `text.${textColor}`, height: "fit" }}
    >
      <Link color="inherit" href="/" sx={{ fontWeight: "bold" }}>
        © Heba's App
      </Link>{" "}
      {currentYear}
      {"."}
    </Typography>
  );
};

export default Copyright;
