import { IconButton, IconButtonProps, styled } from "@mui/joy";
import React from "react";
import { GoX } from "react-icons/go";
import { mqMax } from "../../../utils/media-queries";
import * as styles from "./navigation.module.scss";
import SvgMenuButton from "./svg-menu";

const NavigationIconButton = styled(IconButton)((params) => ({
  position: "relative",
  display: "none",
  ":hover": {
    backgroundColor:
      params.theme.colorSchemes.dark.palette.neutral.plainHoverBg,
  },
  [mqMax[3]]: {
    display: "block",
  },
}));

interface ToggleProps extends IconButtonProps {
  sticky?: boolean | number;
  toggle?: boolean | number;
}

const NavigationToggleButton: React.FC<ToggleProps> = (props) => {
  return (
    <NavigationIconButton
      {...props}
      sx={[
        {
          zIndex: 9999,
          borderRadius: "50%",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        // { display: props.navToggle ? "block" : "none" },
      ]}
    >
      {props.toggle ? (
        <GoX color="white" className={styles.ToggleIcons} />
      ) : (
        <SvgMenuButton className={styles.ToggleIcons} />
      )}
    </NavigationIconButton>
  );
};

export default NavigationToggleButton;
