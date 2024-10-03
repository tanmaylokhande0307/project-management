"use client";
import React, { useState } from "react";
import { clsx } from "clsx";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  return (
    <div
      className={clsx(
        "fixed z-40 flex h-[100%] flex-col justify-between overflow-y-auto bg-white shadow-xl transition-all duration-300 dark:bg-black w-64",
      )}
    >
      <div></div>
    </div>
  );
};

export default Sidebar;
