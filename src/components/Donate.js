import { ChipIcon, HeartIcon } from "@heroicons/react/solid";
import React from "react";
import { donate } from "../data";
//How to Play section of webpage
export default function Donate() {
  return (
    <section id="donate">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Support the Game
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Below are some of the various avenues available to support the launch of SpellSlingers. Each tier of donation will receive a special reward upon the official launch date.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {donate.map((donate) => (
            <div key={donate} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <HeartIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {donate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
