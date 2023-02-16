import { Box, Typography, styled } from "@mui/joy";
import React from "react";
import BlockWrapper from "../block-wrapper/block-wrapper";

const PromotionItem = styled(Box)((props) => ({
  borderBottom: "1px solid",
  borderColor: props.theme.palette.divider,
  display: "block",
  width: "100%",
}));

const Promotion = () => {
  return (
    <section id="promotion">
      <BlockWrapper num="02" txt="Акции">
        <Typography
          level="h3"
          sx={{
            fontSize: "55px",
            fontWeight: 600,
            lineHeight: "117.5%",
            textAlign: "center",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            mt: 3,
            fontFamily: "Orchidea Pro",
          }}
        >
          АКЦИИ И СКИДКИ.
        </Typography>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <PromotionItem>Акция 1</PromotionItem>
          <PromotionItem>Акция 2</PromotionItem>
          <PromotionItem>Акция 3</PromotionItem>
          <PromotionItem>Акция 4</PromotionItem>
        </Box>
      </BlockWrapper>
    </section>
  );
};

export default Promotion;
