import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import GameModes from "./components/GameModes";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import Donate from "./components/Donate";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <GameModes />
      <Skills />
      <Reviews />
      <Donate/>
      <Contact />
    </main>
  );
}
