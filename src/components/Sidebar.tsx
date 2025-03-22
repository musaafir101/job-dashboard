import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="p-4 w-1/4 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Albert Flores</h2>
        <p className="text-gray-500">Senior Product Designer</p>
      </div>
      <div className="mt-4">
        <p>
          Profile Visitors: <span className="font-bold">140</span>
        </p>
        <p>
          Resume Viewers: <span className="font-bold">20</span>
        </p>
        <p>
          My Jobs: <span className="font-bold">88</span>
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
