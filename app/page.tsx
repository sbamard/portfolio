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
      <Image
        className="absolute p-10 animate-moveRight"
        src="/original.gif"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <div className="grid justify-center content-end">
        <ArrowDownCircleIcon className="size-20 text-gray-400 mb-8 transition-transform duration-300 transform hover:translate-y-2 hover:animate-bounce" />
      </div>
      <div className="col-start-3 col-span-2 grid justify-items-center content-center">
        <VideoPlayer />
      </div>
      <div className="col-start-5 text-black justify-self-start content-center pl-8 pt-40">
        <UserCircleIcon className="size-12 text-gray-400" />
        <CoeurIcon />
        <ChatBubbleOvalLeftEllipsisIcon className="size-12 text-gray-400" />
      </div>
    </main>
  );
};

export default Page;
