import React from "react";
import VideoPlayer from "../app/components/VideoPlayer";
import Image from "next/image";
import CoeurIcon from "./ui/icones/CoeurIcon";

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Page = () => {
  return (
    <main className="grid grid-cols-6 min-h-screen bg-pasTropBlanc">
      
      <div className="justify-center content-end hidden md:block pl-20">
        <ArrowDownCircleIcon className="size-20 text-gray-400 mb-8 transition-transform duration-300 transform hover:translate-y-2 hover:animate-bounce" />
      </div>

      <div className="grid col-start-1 md:col-start-3 md:col-span-2 col-span-7  justify-items-center md:content-center ">
        <VideoPlayer />
      </div>

      <div className="md:col-start-5 bottom-80 left-3/4  text-black absolute md:static justify-self-start content-center pl-8 pt-40">
        <UserCircleIcon className="size-12 md:text-gray-400 text-white" />
        <CoeurIcon />
        <ChatBubbleOvalLeftEllipsisIcon className="size-12 md:text-gray-400 text-white" />
      </div>
    </main>
  );
};

export default Page;
