import type { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={83}
    height={86}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect width={80} height={80} x={1} y={1} fill="#400CB9" rx={16} />
      <rect
        width={80}
        height={80}
        x={1}
        y={1}
        stroke="#fff"
        strokeWidth={2}
        rx={16}
      />
      <g filter="url(#b)">
        <circle
          cx={41}
          cy={41}
          r={20}
          stroke="#EBA105"
          strokeWidth={12}
          shapeRendering="crispEdges"
        />
      </g>
    </g>
    <defs>
      <filter
        id="a"
        width={83}
        height={86}
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
        <feOffset dx={1} dy={4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.178336 0 0 0 0 0.0734368 0 0 0 0 0.422428 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_1114" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_1114"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={52}
        height={54}
        x={15}
        y={15}
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
        <feColorMatrix values="0 0 0 0 0.976471 0 0 0 0 0.745098 0 0 0 0 0.243137 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_1114" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_1114"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
