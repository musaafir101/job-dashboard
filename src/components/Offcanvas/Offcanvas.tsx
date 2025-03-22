import React from "react";
import { X } from "lucide-react";
import Logo from "../icons/Logo"; // Import Logo component
import Search from "../icons/Search"; // Import Search icon
import "./Offcanvas.css"; // Import styles

interface OffcanvasProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Offcanvas: React.FC<OffcanvasProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Offcanvas Menu */}
      <div className={`offcanvas-menu ${isOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <Logo />
          <button className="p-2" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="offcanvas-links font-medium text-[16px] text-[#737A91]">
          <li className="font-semibold text-[18px] text-[#0154AA] cursor-pointer">
            Find Jobs
          </li>
          <li className="cursor-pointer">Top Companies</li>
          <li className="cursor-pointer">Job Tracker</li>
          <li className="cursor-pointer">My Calendar</li>
          <li className="cursor-pointer">Documents</li>
          <li className="cursor-pointer">Messages</li>
          <li className="cursor-pointer">Notifications</li>
        </ul>

        {/* Search Input */}
        <div className="flex items-center bg-gray-100 px-3 py-[10px] rounded-[8px] mt-4">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none px-2 text-[14px] w-full"
          />
        </div>

        {/* Resume Builder Button */}
        <button className="mt-4 w-full bg-[#0154AA] text-white px-4 py-2 rounded-[8px] text-[16px] hover:bg-blue-900 cursor-pointer">
          Resume Builder
        </button>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="offcanvas-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Offcanvas;
