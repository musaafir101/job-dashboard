import React, { Suspense, useState } from "react";
import ShimmerLogo from "./shimmers/logo/ShimmerLogo";
import Search from "./icons/Search";
import Logo from "./icons/Logo";
import profile from "../assets/images/profile-image-opt.png";
import { Menu } from "lucide-react";
import Offcanvas from "./Offcanvas/Offcanvas";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between bg-white py-3 w-full max-w-[1350px] 2xl:max-w-[1500px] mx-auto px-4">
        {/* Left Section - Logo & Navigation */}
        <div className="flex items-center gap-6">
          <Suspense fallback={<ShimmerLogo />}>
            <Logo />
          </Suspense>

          {/* Navigation Links */}
          <ul className="hidden items-center gap-4 text-[#737A91] lg:flex lg:flex-wrap">
            <li className="font-semibold text-blue-700">Find Jobs</li>
            <li>Top Companies</li>
            <li>Job Tracker</li>
            <li>My Calendar</li>
            <li>Documents</li>
            <li>Messages</li>
            <li>Notifications</li>
          </ul>
        </div>

        {/* Right Section - Search, Button & Profile */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Search Input */}
          <div className="relative flex items-center bg-gray-100 px-3 py-[10px] rounded-[8px]">
            <Search />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none px-2 text-[14px]"
            />
          </div>

          {/* Resume Builder Button */}
          <button className="hidden bg-[#0154AA] text-white px-4 py-2 rounded-[8px] text-[16px] hover:bg-blue-900 cursor-pointer lg:inline-flex">
            Resume Builder
          </button>

          {/* Profile Image */}
          <img
            src={profile}
            alt="Profile"
            className="w-[38px] h-[38px] rounded-full cursor-pointer"
          />
        </div>
        {/* Mobile Menu Button */}
        <button className="block lg:hidden p-2" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
        {/* Offcanvas Menu Component */}
        <Offcanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Header;
