import { Box, BoxProps, Typography } from "@mui/joy";
import React from "react";

interface ImgContainerProps extends BoxProps {
  children?: React.ReactNode;
  title?: string;
}

const ImgContainer: React.FC<ImgContainerProps> = ({
  children,
  title,
  ...props
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box
        {...props}
        sx={[
          {
            width: "235px",
            height: "358px",
            borderRadius: "1000px",
            overflow: "hidden",
            boxShadow: "sm"
          },
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        {children}
      </Box>

      {title && (
        <Typography
          sx={{
            fontSize: "21px",
            fontWeight: 600,
            lineHeight: "139%",
            textAlign: "center",
            color: "#000",
          }}
        >
          {title}
        </Typography>
      )}
    </Box>
  );
};

export default ImgContainer;
