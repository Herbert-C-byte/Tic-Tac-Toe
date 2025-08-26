import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

// Here I updated the svg using chat gpt
const XIcon = ({ size, width, height, ...props }: IconProps) => {
  const w = size ?? width ?? 83;
  const h = size ?? height ?? 86;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 83 86"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_d_2_1110)">
        <rect x={1} y={1} width={80} height={80} rx={16} fill="#EBA105" />
        <rect
          x={1}
          y={1}
          width={80}
          height={80}
          rx={16}
          stroke="#fff"
          strokeWidth={2}
        />
        <g filter="url(#filter1_d_2_1110)">
          <path
            d="M61 61L21 21"
            stroke="#400CB9"
            strokeWidth={12}
            strokeLinecap="round"
          />
          <path
            d="M21 61L61 21"
            stroke="#400CB9"
            strokeWidth={12}
            strokeLinecap="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_2_1110"
          x={0}
          y={0}
          width={83}
          height={86}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1} dy={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.774609 0 0 0 0 0.537753 0 0 0 0 0.0266398 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_1110"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_1110"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2_1110"
          x={15}
          y={15}
          width={52}
          height={54}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.178336 0 0 0 0 0.0734368 0 0 0 0 0.422428 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_1110"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_1110"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default XIcon;
