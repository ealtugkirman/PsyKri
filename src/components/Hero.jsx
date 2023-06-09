import Lottie from "lottie-react";
import wave from "../assets/wave.json";
import { TypeAnimation } from "react-type-animation";
import brain from "../assets/brain.json";
import { FiArrowRightCircle } from "react-icons/fi";

function Hero() {
  return (
    <div className="font-first md:pt-8  max-w-8xl">
      {/* Header */}
      <div className="space-y-4 mt-12 text-center md:text-left md:space-y-4 mx-8 md:mt-24">
        <h3 className="text-lg   md:text-4xl">WE ARE DRIVEN BY ONE MISSION</h3>
        <span className="flex-row text-gradient flex md:text-7xl font-bold ">
          A WORLD WE UNDERSTAND{" "}
        </span>
        <span className="text-5xl md:text-7xl font-bold">
          EACH OTHER{" "}
          <span className="md:hidden">
            <br />
          </span>
          <TypeAnimation
            sequence={["BETTER", 1500, "FASTER", 1500, "COMPLETELY", 1500, "ADVANCED", 1500, "PERFECTLY", 1500]}
            speed={50}
            className=""
            wrapper="span"
            repeat={Infinity}
          />
        </span>
        <div className="pt-2">
          <button
            onClick={null}
            className="mt-2 z-10 items-center text-xl flex mx-auto bg-black hover:bg-blue-700   md:mx-0  text-white  border border-blue-600 border-1 rounded-xl p-1 px-4 ">
            Explore Technology
            <div className="ml-3 mt-1 text-white">
              <FiArrowRightCircle />
            </div>
          </button>
        </div>
      </div>
      <div className="right-0  absolute -mt-60  md:-mt-80 ">
        <Lottie className="opacity-30 md:opacity-100" animationData={wave} />
      </div>
      {/* Banner Text */}
      <div className="bg-black mx-auto md:space-x-12  z-10 justify-center items-center h-48 mt-12 md:mt-20 opacity-80 flex flex-row">
        <div className="w-1/3 md:w-1/6">
          <Lottie className="" animationData={brain} />
        </div>
        <div className="w-3/5 ">
          <p className="text-white font-second text-sm  md:text-xl ">
            Welcome Psy-Kri that provides psychological diagnosis based on the
            APA criteria! Our app is designed to help psychologs understand
            patients symptoms and receive an accurate diagnosis to improve their
            mental health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
