import React from "react";
import Link from "@mui/material/Link";

export default function ButtonLink({ children }) {
  return (
    <Link
      sx={{
        color: "#FFF323",
        alignSelf: "center",
        padding: "10px",
        margin: "10px",
      }}
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      {children}
    </Link>
  );
}
