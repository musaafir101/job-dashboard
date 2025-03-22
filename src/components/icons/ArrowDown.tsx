import React from "react";

interface ArrowDownProps {
  width?: number;
  height?: number;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ width = 13, height = 8 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill="#333"
        d="m11.91.433 1.06 1.061-5.777 5.779a.996.996 0 0 1-1.413 0L0 1.494 1.06.434l5.425 5.424L11.91.433Z"
      />
    </svg>
  );
};

export default ArrowDown;
