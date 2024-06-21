"use client";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function CoeurIcon() {
  const [colorClass, setColorClass] = useState("text-gray-400 text-white");
  const [animClass, setAnimClass] = useState("");
  const [showMerci, setShowMerci] = useState(false);

  const handleClick = () => {
    const newColorClass = colorClass === "md:text-gray-400 text-white" ? "text-red-400" : "md:text-gray-400 text-white";
    setColorClass(newColorClass);

    setAnimClass("animate-heartbeat");
    setTimeout(() => setAnimClass(""), 1000);

    // Show "merci!" message
    if (newColorClass === "text-red-400") {
      setShowMerci(true);
      setTimeout(() => setShowMerci(false), 4000); 
    } else {
      setShowMerci(false);
    }
  };

  return (
    <div className="relative flex items-center">
      <HeartIcon
        className={`size-12 ${colorClass} ${animClass}`}
        onClick={handleClick}
      />
      {showMerci && (
        <span className="absolute  transform -translate-x-1/2 text-xl md:text-gray-400 text-white animate-fade-in-out">
          Merci!
        </span>
      )}
    </div>
  );
}
