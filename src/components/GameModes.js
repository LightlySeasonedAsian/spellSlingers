import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { gameModes } from "../data";

export default function GameModes() {
  return (
    <section id="gamemodes" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Game Modes
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <ul>
              <li>
                2-4 Players Standard
              </li>
              <li>
                5-8 Players Standard
              </li>
              <li>
                2-4 Players Masochist 
              </li>
              <li>
                5-8 Players Masochist
              </li>
            </ul>
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {gameModes.map((gameMode) => (
            <a
              href={gameMode.link}
              key={gameMode.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={gameMode.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {gameMode.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {gameMode.title}
                  </h1>
                  <p className="leading-relaxed">{gameMode.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
