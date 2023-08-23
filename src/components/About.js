import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Welcome to the world of SpellSlingers!
          </h1>
          <p className="mb-8 leading-relaxed">
          Dive into the enchanting realm of 'SpellSlingers,' a dynamic and strategic card game that weaves fantasy and magic into a pulse-pounding competition! Crafted for those who seek both accessible gameplay and intense challenges, 'SpellSlingers' invites players to become masters of spellcasting and mystical tactics. Unleash your inner mage as you conjure spells, summon fantastical beings, and engage in rapid-fire duels that balance excitement and depth. Victory demands sharp wit and clever maneuvering — can you outsmart your opponents and claim the title of the ultimate SpellSlinger?          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              How To Play
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See Reviews
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
