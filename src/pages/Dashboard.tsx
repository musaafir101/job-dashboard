import React, { Suspense } from "react";
import Header from "../components/Header";
import oval from "../assets/images/oval-opt.png";
import cover from "../assets/images/cover-image-opt.png";
import ArrowDown from "../components/icons/ArrowDown";
import { jobList } from "../constants/jobData";
import { similarJobs } from "../constants/similarJobs";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";
import SimilarJobs from "../components/SimilarJobs";
import ProfileCard from "../components/ProfileCard";
import ProfileCardShimmer from "../components/shimmers/ProfileCardShimmer";

const Dashboard: React.FC = () => {
  const promotedJobs = jobList.filter((job) => job.promoted === true);
  const recommendedJobs = jobList.filter((job) => job.promoted === false);
  return (
    <div className="bg-[#F4F4F4]">
      {/* Header */}
      <Header />
      <div className="flex min-h-screen w-full max-w-[1350px] 2xl:max-w-[1500px] mx-auto px-4 flex-col lg:flex-row flex-1 sm:p-4 p-2 lg:pr-0">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 sm:p-4 p-2 lg:pl-0">
          {/* Profile Section */}
          <Suspense fallback={<ProfileCardShimmer />}>
            <ProfileCard
              cover={cover}
              profile={oval}
              name="Albert Flores"
              designation="Senior Product Designer | UI/UX Designer | Graphic Designer | Web..."
              location="Clinton, Maryland"
            />
          </Suspense>

          {/* Stats */}
          <div className="mt-[10px] bg-white rounded-[10px] p-[20px]">
            <div className="flex justify-between border-b border-[#E9ECEF] pb-2">
              <span className="text-[14px]">Profile Visitors</span>{" "}
              <span className="font-medium text-[#0154AA]">140</span>
            </div>
            <div className="flex justify-between border-b border-[#E9ECEF] pb-2 mt-2">
              <span className="text-[14px]">Resume Viewers</span>{" "}
              <span className="font-medium text-[#0154AA]">20</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[14px]">My Jobs</span>{" "}
              <span className="font-medium text-[#0154AA]">88</span>
            </div>
          </div>

          {/* Calendar */}
          <div className="mt-[10px] bg-white p-4 rounded-lg flex items-center justify-between cursor-pointer">
            <div>
              <h3 className="font-semibold text-[#333333] mb-0 leading-[20px] text-[16px]">
                My Calendar
              </h3>
              <p className="text-[14px] leading-[14px] text-[#737A91]">
                Upcoming Interviews
              </p>
            </div>
            <ArrowDown />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 sm:p-4 p-2">
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-2xl font-bold">
              Find your Dream Job,{" "}
              <span className="text-[#0154AA]">Albert!</span>
            </h1>
            <p className="text-[14px] text-[#585D6E] font-medium">
              Explore the latest job openings and apply for the best
              opportunities available today!
            </p>
          </header>

          {/* Search & Filters */}
          <JobFilter />

          {/* Similar Jobs */}
          <SimilarJobs categories={similarJobs} />

          {/* Featured Job Listings */}
          <section className="pb-[25px] border-b-1 border-[#E9ECEF]">
            <h2 className="text-[18px] font-medium mb-[15px]">
              Featured Jobs
              <a
                href="#"
                className="text-[14px] text-[#0154AA] ml-[15px] font-medium border-b-1 border-[#0154AA]"
              >
                See Featured Jobs
              </a>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:grid-cols-5">
              {/* Job Card */}
              {promotedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>

          {/* Recommended Job Listings */}
          <section className="py-[25px]">
            <h2 className="text-[18px] font-medium mb-[15px]">
              Recommended Jobs
              <a
                href="#"
                className="text-[14px] text-[#0154AA] ml-[15px] font-medium border-b-1 border-[#0154AA]"
              >
                See Recommended Jobs
              </a>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
              {/* Job Card */}
              {recommendedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
              {/* Repeat this for other job cards */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
