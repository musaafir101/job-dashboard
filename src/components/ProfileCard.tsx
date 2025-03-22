import React from "react";

interface ProfileCardProps {
  cover: string;
  profile: string;
  name: string;
  designation: string;
  location: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  cover,
  profile,
  name,
  designation,
  location,
}) => {
  return (
    <div className="relative rounded-[10px] overflow-hidden bg-white">
      {/* Cover Image */}
      <img src={cover} alt="Cover" className="w-full h-24 object-cover" />

      {/* Profile Image */}
      <img
        src={profile}
        alt="Profile"
        className="w-20 h-20 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-1 border-white"
      />

      {/* Profile Details */}
      <div className="bg-white pt-[40px] p-[20px] text-center">
        <h2 className="mt-2 font-semibold text-[18px]">{name}</h2>
        <p className="text-[14px] text-[#333333]">{designation}</p>
        <p className="text-[12px] text-[#585D6E]">{location}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
