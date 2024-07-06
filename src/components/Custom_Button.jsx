import { Button } from "@mui/material";
import React from "react";

export const Custom_Button = (props) => {
  return (
    <Button sx={{ width: "100%" }} {...props} variant="contained">
      {props.children}
    </Button>
  );
};
