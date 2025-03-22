import React from "react";

interface SimilarJobsProps {
  categories: string[];
}

const SimilarJobs: React.FC<SimilarJobsProps> = ({ categories }) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 text-gray-600 pb-2 mb-2 border-b border-[#E9ECEF]">
      <span className="text-sm font-medium text-[14px]">Similar:</span>

      {/* 🔹 Loop through categories */}
      <div className="flex gap-2 flex-wrap sm:flex-nowrap">
        {categories.map((category, index) => (
          <span
            key={index}
            className="px-3 py-1 border border-[#737A91] rounded-[5px] text-[12px] font-medium cursor-pointer hover:bg-gray-200 transition"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimilarJobs;
