import {
  CssVarsProvider,
  CssBaseline,
  GlobalStyles,
  Box,
  BoxProps,
} from "@mui/joy";
import React from "react";
import theme from "../theme";
import "../styles/main.scss";

interface GlobalProps {
  children?: React.ReactNode;
}
const Global: React.FC<GlobalProps> = ({ children }) => {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: {
            scrollBehavior: "smooth",
          },
          body: {
            fontSize: 16,
            fontWeight: 400,
            fontStyle: "normal",
            textRendering: "optimizeSpeed",
            lineHeight: 1.5,
            overflowX: "hidden",
          },
        }}
      />
      {children}
    </CssVarsProvider>
  );
};

function Root(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          bgcolor: "background.appBody",
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr",
          },
          gridTemplateRows: `1fr minmax(56px, auto)`,
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Header(props: BoxProps) {
  return (
    <Box
      component="header"
      className="Header"
      {...props}
      sx={[
        {
          gridColumn: "1 / -1",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Main(props: BoxProps) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[{ p: 0 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  );
}

function Footer(props: BoxProps) {
  return (
    <Box
      component="footer"
      className="Footer"
      {...props}
      sx={[
        {
          gridColumn: "1 / -1",
          borderBottom: "1px solid",
          borderColor: "divider",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Container(props: BoxProps) {
  return (
    <Box
      className="container"
      {...props}
      sx={[...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  );
}

const Layout = {
  Global,
  Root,
  Header,
  Main,
  Footer,
  Container,
};

export default Layout;
