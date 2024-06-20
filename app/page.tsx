import React from "react";
import VideoPlayer from "../app/components/VideoPlayer";

import CoeurIcon from "./ui/icones/CoeurIcon";

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Page = () => {
  return (
    <main className="grid grid-rows-1 min-h-screen bg-pasTropBlanc">
      
      <div className="col-start-2 col-span-2 grid justify-items-center content-center">
        <VideoPlayer />
      </div>
      <div className="col-start-4 text-black justify-self-start content-center">
        <UserCircleIcon className="w-10 h-10 text-gray-400" />
        <CoeurIcon/>
        <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-gray-400" />
      </div>
      <div className="grid justify-center content-center">
        <div className="relative">
          <ArrowDownCircleIcon className="w-16 h-16 text-gray-400 mb-8 transition-transform duration-300 transform hover:translate-y-2 hover:animate-bounce" />
        </div>
      </div>
    </main>
  );
};

export default Page;
