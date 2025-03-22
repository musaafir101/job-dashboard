import React from "react";

interface SearchProps {
  color?: string; // Optional prop to set stroke color
}

const Search: React.FC<SearchProps> = ({ color = "#737A91" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
      <path
        stroke={color} // Use the dynamic color prop
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m16.5 17.024-2.594-2.593M13.098 7.573a6.049 6.049 0 1 1-1.467-3.97"
      />
    </svg>
  );
};

export default Search;
