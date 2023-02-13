import { Box, Typography, styled, BoxProps } from "@mui/joy";
import React from "react";
import { mqMax } from "../../../utils/media-queries";
import SvgMassivYug from "./svg-massiv-yug";

const First = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontWeight: 600,
  fontSize: "29px",
  lineHeight: "38px",
  textTransform: "uppercase",
  color: theme.palette.common.white,
  [mqMax[3]]: {
    fontSize: "24px",
  },
}));

const Second = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "16px",
  color: theme.colorSchemes.dark.palette.text.primary,
  [mqMax[3]]: {
    display: "none",
  },
}));

const Svg = styled(SvgMassivYug)(({ theme, sticky }) => ({
  width: sticky ? 52 : 63,
  height: sticky ? 52 : 63,
  transition: "500ms ease-in-out",
  [mqMax[3]]: {
    width: 40,
    height: 40,
  },
}));

interface HeaderLogoProps extends BoxProps {
  sticky?: boolean | number;
}

const HeaderLogo = (props: HeaderLogoProps) => {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <Svg sticky={props.sticky} />
      <Box sx={{ padding: "0 28px" }}>
        <First
          sx={(theme) => ({
          })}
          level="body1"
        >
          Массив Юг
        </First>
        <Second
          sx={(theme) => ({
            color: props.sticky
              ? theme.colorSchemes.dark.palette.text.secondary
              : theme.colorSchemes.dark.palette.text.primary,
            display: props.sticky ? "none" : "block"
          })}
          level="body3"
        >
          от идеи до воплощения в каждой мелочи
        </Second>
      </Box>
    </Box>
  );
};

export default HeaderLogo;
