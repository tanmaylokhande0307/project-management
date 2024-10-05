"use client";
import React, { useState } from "react";
import { clsx } from "clsx";
import Image from "next/image";
import { LockIcon } from "lucide-react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  return (
    <div
      className={clsx(
        "fixed z-40 flex h-[100%] w-64 flex-col jus mt-1tify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black",
      )}
    >
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            PManager
          </div>
        </div>
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src={"/logo.png"} height={40} width={40} alt="logo"/>
          <div>
            <h3 className="tracking-wide font-bold text-xl">Team</h3>
            <div className="flex items-start mt-1 gap-2">
              <LockIcon className="text-gray-500 dark:text-gray-400 h-3 w-3 mt-[0.1rem]"/>
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
