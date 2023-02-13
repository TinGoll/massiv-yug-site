import { Box, Divider, Stack, styled, Typography } from "@mui/joy";
import React from "react";
import Layout from "../../layout/Layout";

const BlockDivider = styled(Box)((props) => ({}));
interface BlockWrapperProps {
  num: string;
  txt: string;
  children?: React.ReactNode;
}

const BlockWrapper: React.FC<BlockWrapperProps> = ({ num, txt, children }) => {
  return (
    <Layout.Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        spacing={8}
        direction="row"
        divider={<Divider sx={{width: 2}} orientation="vertical" />}
        sx={{
          mt: 6,
          height: 128
        }}
      >
        <Box
          sx={{
            fontSize: "27px",
            color: "rgba(255, 192, 153, 1)",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            textAlign: "center",
            minWidth: 150,
          }}
        >
          {num}
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            color: "#000",
            textTransform: "uppercase",
            fontWeight: 500,
            lineHeight: "133%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            textAlign: "center",
            minWidth: 150,
          }}
        >
          {txt}
        </Box>
      </Stack>
      {children}
    </Layout.Container>
  );
};

export default BlockWrapper;
