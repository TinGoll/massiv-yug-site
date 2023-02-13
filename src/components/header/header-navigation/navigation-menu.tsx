import React from "react";
import { styled, StackProps, Stack } from "@mui/joy";
import { mqMax, mqMin } from "../../../utils/media-queries";

interface MenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  sticky?: number | boolean;
}

const Menu = styled("ul")((props) => ({
  listStyleType: "none",
  display: "flex",
  gap: "var(--gap, 43px)",
  fontSize: "16px",
  zIndex: 1300,
  [mqMax[4]]: {
    gap: "var(--gap, 26px)",
  },
  [mqMax[3]]: {
    position: "fixed",
    inset: "0 0 0 30%",
    background: "hsl(0 0% 100% / 0.1)",
    flexDirection: "column",
    padding: "min(16vh, 10rem) 2em",
    backdropFilter: "blur(0.5rem)",
    fontSize: "1.2em",
    "--gap ": "2em",
    transform: (props as any).open ? "translateX(0%)" : "translateX(100%)",
    transitionTimingFunction: "ease",
    transition: "transform 200ms ease-in",
  },
  [mqMin[3]]: {
    //@ts-ignore
    paddingBlock: props.sticky ? "12px" : "40px",
    transition: "700ms ease",
  },
}));

const NavigationMenu: React.FC<MenuProps> = ({ children, ...props }) => {
  return <Menu {...props}>{children}</Menu>;
};

export default NavigationMenu;
