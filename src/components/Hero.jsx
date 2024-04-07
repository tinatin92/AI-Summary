import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="nav">
        <img src={logo} alt="logo" className="w-28 object-contain" />

        <button
          className="black_btn"
          type="button"
          onClick={() => window.open("https://github.com")}
        >
          gitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summarize, an open-source article summarize
        that transforms lengthy article into clear and concise summaries
      </h2>
      
    </header>
  );
};

export default Hero;
