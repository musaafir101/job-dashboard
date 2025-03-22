import React from "react";

interface ArrowDownProps {
  width?: number;
  height?: number;
}

const ArrowDownSm: React.FC<ArrowDownProps> = ({ width = 9, height = 5 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill="#585D6E"
        d="M8.264 0 9 .744l-4.009 4.05a.69.69 0 0 1-.755.152.69.69 0 0 1-.225-.152L0 .744.736 0 4.5 3.802 8.264 0Z"
      />
    </svg>
  );
};

export default ArrowDownSm;
