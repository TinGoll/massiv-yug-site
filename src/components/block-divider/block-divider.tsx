import { Box } from "@mui/joy";
import React from "react";

const BlockDivider = () => {
  return (
    <Box
      sx={{
        bgcolor: "#333333",
        width: "100%",
        minHeight: 300,
        mt: 6,
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    ></Box>
  );
};

export default BlockDivider;
