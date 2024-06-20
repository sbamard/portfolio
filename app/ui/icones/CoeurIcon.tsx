"use client";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function CoeurIcon() {
  const [colorClass, setColorClass] = useState("text-gray-400");
  const [animClass, setAnimClass] = useState("");
  const [showMerci, setShowMerci] = useState(false);

  const handleClick = () => {
    const newColorClass = colorClass === "text-gray-400" ? "text-red-400" : "text-gray-400";
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
        className={`w-10 h-10 ${colorClass} ${animClass}`}
        onClick={handleClick}
      />
      {showMerci && (
        <span className="absolute  transform -translate-x-1/2 text-m text-gray-700 animate-fade-in-out">
          Merci!
        </span>
      )}
    </div>
  );
}
