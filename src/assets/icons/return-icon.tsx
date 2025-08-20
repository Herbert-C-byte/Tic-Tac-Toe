import * as React from "react"
import type { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={52}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect width={48} height={48} x={1} y={1} fill="#400CB9" rx={8} />
      <rect
        width={48}
        height={48}
        x={1}
        y={1}
        stroke="#fff"
        strokeWidth={2}
        rx={8}
      />
      <path
        fill="#F4B52E"
        d="M12 26.732c-1.333-.77-1.333-2.694 0-3.464l18-10.392c1.333-.77 3 .192 3 1.732v20.784c0 1.54-1.667 2.502-3 1.732L12 26.732Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={50}
        height={52}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.178336 0 0 0 0 0.0734368 0 0 0 0 0.422428 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_592" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_592"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
