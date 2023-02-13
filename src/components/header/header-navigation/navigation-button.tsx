import React from "react";

import { styled, ButtonProps, Button } from "@mui/joy";

const Item = styled("li")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center"
}));

interface ItemProps extends ButtonProps {}

const NavigationButton: React.FC<ItemProps> = ({ children, ...props }) => {
  return (
    <Item>
      <Button
        {...props}
        sx={[
          {
            borderColor: "var(--joy-palette-neutral-600)",
            color: "var(--joy-palette-neutral-200)",
            ["&:hover"]: {
              backgroundColor: "var(--joy-palette-neutral-800)",
              color: "var(--joy-palette-neutral-50)",
              borderColor: "var(--joy-palette-neutral-700)",
              
            },
          },
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        {children}
      </Button>
    </Item>
  );
};

export default NavigationButton;
