import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <path
      fill="#210045"
      d="M29 18.232c1.333-.77 1.333-2.694 0-3.464L11 4.376c-1.333-.77-3 .192-3 1.732v20.784c0 1.54 1.667 2.502 3 1.732l18-10.392Z"
    />
  </svg>
);
export default SvgComponent;
