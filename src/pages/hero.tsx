import React from "react";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ReactPlayer from "react-player";
import HeroExampleDark from "./HeroExample-Dark.png";
import HeroExampleLight from "./HeroExample-Light.png";
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";
const Header = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <div className="flex max-w-screen-xl px-4 py-8 mx-auto gap-8 ">
      <div className="mr-auto place-self-center lg:col-span-7 animate-fade-right animate-once animate-ease-in">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          MarkMeHere!
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          An easy way to keep track of your class's attendance.
        </p>
        <a
          href="https://demo.markmehere.com"
          target="_blank"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100"
        >
          Interactive Demo
        </a>
        <a
          href="/docs/intro"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
        >
          View the Docs
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex w-1/2 h-full justify-center ">
        <img
          src={colorMode === "dark" ? HeroExampleDark : HeroExampleLight}
          alt="HeroExample"
          className="h-auto max-w-xl rounded-lg shadow-xl animate-fade-left animate-once animate-ease-in"
        />
        {/* <ImagePlaceholder /> */}
      </div>
    </div>
  );
};

const DemoVideo = () => {
  return (
    <div className="flex max-w-screen-xl px-4 py-8 mx-auto gap-8 justify-center w-full h-full">
      <ReactPlayer
        className="animate-fade animate-once animate-ease-in "
        url={"https://www.youtube.com/watch?v=SWr6NW2osqc"}
      />
    </div>
  );
};

const FeaturesList = () => {
  return (
    <div className="flex max-w-screen-xl px-4 py-8 mx-auto gap-8 ">
      <div>Under Construction...</div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <BrowserOnly>
        {() => {
          return <Header />;
        }}
      </BrowserOnly>
      <DemoVideo />
      <FeaturesList />
    </>
  );
};

export default Hero;
