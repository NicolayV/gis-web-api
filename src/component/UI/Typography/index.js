import React from "react";

import { Typography } from "@mui/material";

const TypographyLogo = (title, subTitle) => {
  return (
    <Typography
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}
      display="flex"
      component="span"
    >
      <Typography
        sx={{
          color: "#FFFFFF",
          marginBottom: "0px",
        }}
        variant="h3"
        component="span"
        gutterBottom
      >
        AEROSPACE
      </Typography>
      <Typography
        sx={{
          color: "#FFFFFF",
          marginTop: "0px",
          alignSelf: "flex-end",
        }}
        variant="h5"
        gutterBottom
        component="span"
      >
        AGRO
      </Typography>
    </Typography>
  );
};

export default TypographyLogo;
