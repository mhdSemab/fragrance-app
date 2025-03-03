import * as React from "react";

const CustomSVG = (props) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={16}
      y={4}
      width={16}
      height={10}
      rx={3}
      fill="#2F88FF"
      stroke="#000000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={6}
      y={20}
      width={36}
      height={24}
      rx={12}
      stroke="#000000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 33C9.04225 29.1326 18 30 24 32C30 34 38 37 42 32"
      stroke="#000000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 8.99999C25 9.55228 24.5523 9.99999 24 9.99999C23.4477 9.99999 23 9.55228 23 8.99999C23 8.44771 23.4477 7.99999 24 7.99999C24.5523 7.99999 25 8.44771 25 8.99999Z"
      fill="white"
    />
  </svg>
);

export default function ApplicationLogo(props) {
    return (
        <CustomSVG className="h-9 w-auto text-gray-800" {...props} />
    );
}
