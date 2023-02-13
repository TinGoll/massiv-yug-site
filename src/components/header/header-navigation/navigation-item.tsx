import React from "react";

import { styled } from "@mui/joy";
import { GatsbyLinkProps, Link } from "gatsby";
import { mqMin } from "../../../utils/media-queries";

//@ts-ignore
const Item = styled("li")(({ theme, sticky }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  ["& a"]: {
    textDecoration: "none",
    transitionDuration: "0.6s",
    fontStyle: "normal",
    fontWeight: 400,
    color: "inherit",
    userSelect: "none",
  },
  ["& a:before"]: {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "4rem",
  },
  [":hover a"]: {
    color: "#ffc099",
    fontWeight: 400,
  },
  [mqMin[3]]: {
    ["&:before"]: {
      content: '""',
      display: "block",
      zIndex: 1000,
      height: "2px",
      width: "110%",
      background: "#FFC099",
      position: "absolute",
      top: sticky ? "-12px" : "-40px",
      left: 0,
      transform: "scaleX(0)",
      transition: "transform 0.3s ease-in-out",
    },
    [":hover"]: {
      ["&:before"]: {
        transform: "scaleX(1)",
        transition: "transform 0.2s ease-in-out",
      },
    },
  },
}));

interface ItemProps extends GatsbyLinkProps<any> {
  children?: React.ReactNode;
  active?: boolean;
  sticky?: boolean | number;
  p?: number;
}

const NavigationItem: React.FC<ItemProps> = ({
  children,
  active,
  p = 0,
  sticky,
  ...probs
}) => {
  return (
    //@ts-ignore
    <Item sticky={sticky}>
      <Link {...(probs as any)}>{children}</Link>
    </Item>
  );
};

export default NavigationItem;

/**
 * .link-item {
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 133%;
  color: inherit;
  user-select: none;
  transition-duration: 500ms;
  &:hover {
    color: #ffc099;
    font-weight: 600;
  }
}

 */
