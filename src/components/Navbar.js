import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            SpellSlingers
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            What is it
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            How to Play
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Reviews
          </a>
          <a href="https://docs.google.com/document/d/1KBD8IFviksGhD6lJFca6Lm4dkJNplEQfl3b1wvnX-f4/edit?usp=drive_link" className="mr-5 hover:text-white">
            Pre-Order/Donate
          </a>
          <a href="https://github.com/LightlySeasonedAsian" className="mr-5 hover:text-white">
            About Us
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact Info
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
