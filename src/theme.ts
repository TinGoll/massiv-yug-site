import { extendTheme } from "@mui/joy/styles";
import colors from "@mui/joy/colors";

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "#fff", // Цвет тела сайта
        },
        primary: {
          "50": "#f499ad",
          "100": "#f1859c",
          "200": "#ef708c",
          "300": "#ed5c7b",
          "400": "#eb486b",
          "500": "#e9345b",
          "600": "#d12e51",
          "700": "#ba2948",
          "800": "#a3243f",
          "900": "#8b1f36",
        },
        neutral: {

        },
      },
    },
    dark: {
      palette: {
        background: {
          // body: "var(--joy-palette-common-black)",
          body: "var(--joy-palette-common-black)",
          surface: "var(--joy-palette-neutral-900)",
        },
      },
    },
  },
  fontFamily: {
    display: "'Inter', var(--joy-fontFamily-fallback)",
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
});
