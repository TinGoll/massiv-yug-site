import * as React from "react";

function SvgMenuButton(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={18}
      viewBox="0 0 39 20"
      fill="none"
      {...props}
    >
      <rect
        x={0.175781}
        width={38.8235}
        height={3.52941}
        rx={1.76471}
        fill="#fff"
      />
      <rect
        x={0.175781}
        y={8.23438}
        width={38.8235}
        height={3.52941}
        rx={1.76471}
        fill="#fff"
      />
      <rect
        x={0.175781}
        y={16.4707}
        width={38.8235}
        height={3.52941}
        rx={1.76471}
        fill="#fff"
      />
    </svg>
  );
}

export default SvgMenuButton;
