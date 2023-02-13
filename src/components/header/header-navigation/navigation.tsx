import { Box, BoxProps } from "@mui/joy";
import React from "react";

const Navigation = (props: BoxProps) => {
  return (
    <Box
      {...props}
      component="nav"
      sx={[
        {
          color: "white",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
};

export default Navigation;
