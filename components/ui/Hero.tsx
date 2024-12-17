import BorderMagicButton from "./BorderMagicButton";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { GoArrowDownRight } from "react-icons/go";

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-36 ">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="-top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight
            className="-top-28 -left-80 h-[80vh] w-[50vwl]"
            fill="blue"
          />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="mx-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-blue-400 max-w-80">Dynamic web Magic Next.js</h2>

                <TextGenerateEffect 
                    className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    words={"Hey there! I'm your friendly neighborhood junior software engineering"}
                />
                {/* have the text below fad in after the textgenerate effect component above */}
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">Hi, I&apos;m David a Next.js Developer based in Stockton,CA</p>

                {/* add the button below here */}
                <a href="#about"><BorderMagicButton  title="My Projects" icon={<GoArrowDownRight />} position="right"/></a>
                
            </div>
        </div>

      </div>
    </>
  );
};

export default Hero;