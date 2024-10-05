"use client";
import React, { useState } from "react";
import { clsx } from "clsx";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  return (
    <div
      className={clsx(
        "fixed z-40 flex h-[100%] w-64 flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black",
      )}
    >
      <div className="flex h-[100%] w-full flex-col justify-start" >
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
            <div className="text-xl font-bold text-gray-800 dark:text-white">
                PManager
            </div>
        </div>
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
