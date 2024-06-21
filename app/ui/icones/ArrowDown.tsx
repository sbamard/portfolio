"use client";
import Link from "next/link";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const ArrowDown = () => {
  return (
    <div className="justify-center content-end hidden md:block pl-20">
      <Link href="/realisations">
        <ArrowDownCircleIcon className="cursor-pointer size-20 text-gray-400 mb-8 transition-transform duration-300 transform hover:translate-y-2 hover:animate-bounce" />
      </Link>
    </div>
  );
};

export default ArrowDown;
