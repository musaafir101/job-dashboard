import React from "react";
import Search from "./icons/Search";

const JobFilter: React.FC = () => {
  return (
    <div className="flex gap-4 mb-6 bg-white p-[20px] rounded-[10px] text-[14px] flex-wrap flex-col lg:flex-nowrap lg:flex-row">
      <div className="lg:flex-1">
        <input
          type="text"
          placeholder="Job Title, Company, or Keywords"
          className="p-3 pl-4 rounded-[8px] lg:pl-0 lg:border-0 w-full font-medium text-[#585D6E] placeholder-opacity-100 focus-visible:outline-none border-1 border-[#E9ECEF]"
        />
      </div>
      <div className="lg:border-l-1 lg:border-r-1 lg:border-0 border-1 rounded-[8px] lg:rounded-[0px] px-[15px]  border-[#E9ECEF] lg:px-[28px] flex">
        <select className="select p-3 pl-0 pr-[10px] border-0 text-[#585D6E] font-medium focus-visible:outline-none appearance-none lg:appearance-auto">
          <option>Select Location</option>
        </select>
      </div>
      <div className="lg:border-0 border-1 rounded-[8px] lg:rounded-[0px] px-[15px]  border-[#E9ECEF] lg:px-[28px]">
        <select className="select p-3 pl-0 border-0 text-[#585D6E] font-medium focus-visible:outline-none appearance-none lg:appearance-auto">
          <option>Job Type</option>
        </select>
      </div>
      <button className="bg-[#0154AA] text-white font-medium px-4 py-2 w-[140px] rounded-[8px] flex items-center justify-center gap-[10px] cursor-pointer text-[16px] hover:bg-blue-900">
        <Search color="#fff" />
        Search
      </button>
    </div>
  );
};

export default JobFilter;
