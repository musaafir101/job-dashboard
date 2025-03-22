import React from "react";

const ProfileCardShimmer: React.FC = () => {
  return (
    <div className="relative rounded-[10px] overflow-hidden shadow-lg bg-white animate-pulse">
      {/* Cover Image Shimmer */}
      <div className="w-full h-24 bg-gray-300"></div>

      {/* Profile Image Shimmer */}
      <div className="w-20 h-20 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 border-4 border-white"></div>

      {/* Profile Details Shimmer */}
      <div className="bg-white pt-[40px] p-[20px] text-center">
        <div className="w-36 h-4 bg-gray-300 mx-auto mb-2 rounded"></div>
        <div className="w-52 h-3 bg-gray-300 mx-auto mb-1 rounded"></div>
        <div className="w-40 h-3 bg-gray-300 mx-auto rounded"></div>
      </div>
    </div>
  );
};

export default ProfileCardShimmer;
