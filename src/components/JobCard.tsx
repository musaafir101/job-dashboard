import React from "react";
import local from "../assets/images/local-opt.svg";
import clock from "../assets/images/clock-opt.svg";
import tag from "../assets/images/tag-opt.svg";
import { Job } from "../constants/jobData";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="px-[20px] py-[10px] bg-white rounded-[10px] border border-[#fff]">
      {/* Promoted Tag */}
      {job.promoted && (
        <span className="text-xs text-[#333] font-semibold">Promoted</span>
      )}

      {/* Job Details */}
      <div className="flex items-start mt-2 gap-3">
        {/* Company Logo */}
        <div className="bg-[#FAFAFA] px-[8px] py-[9.3px] rounded-[9.11px]">
          <img src={job.logo} alt={job.company} />
        </div>

        <div>
          <h2 className="text-[14px] font-medium text-[#333]">{job.title}</h2>
          <p className="text-[12px] font-medium text-[#333]">{job.company}</p>
        </div>
      </div>

      {/* Location & Applicants */}
      <div className="mt-3 space-y-1 text-[#585D6E] text-xs">
        <div className="flex items-center gap-1">
          <img src={local} alt="local" />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-1">
          <img src={clock} alt="clock" />
          <span>
            {job.timeAgo} |
            <a href="#" className="text-blue-600 font-medium ml-[4px]">
              {job.applicants} applicants
            </a>
          </span>
        </div>
      </div>

      {/* Apply & Bookmark */}
      <div className="mt-4 flex justify-between items-center">
        <button className="bg-[#0154AA] text-white text-[14px] font-medium py-[10px] px-[30px] rounded-[6.13px] hover:bg-blue-900 cursor-pointer">
          Apply Now
        </button>

        <button className="p-2 text-[#AAAAAA] hover:text-gray-600 cursor-pointer">
          <img src={tag} alt="tag" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
