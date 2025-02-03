import { DotBackground } from "./ui/dot-background";
import { Spotlight } from "./ui/spotlight";
import { TypewriterEffect } from "./ui/typewriter-effect";

const Hero = () => {
  return (
    <DotBackground>
      <div className="h-96 w-full flex flex-col items-center justify-center relative">
        <Spotlight />
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <h2 className="text-md sm:text-lg uppercase font-medium bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-gray-700">
            Abdelkader Protfolio Fullstack Developer
          </h2>
          <TypewriterEffect
            className="my-4 uppercase"
            words={[
              {
                text: "With no design, no conception,",
              },
              {
                text: "the spirit of the coder",
                className: "text-blue-500",
              },
              {
                text: "is truly formless and free.",
              },
            ]}
          />
          <p className="text-xs md:text-lg font-medium text-gray-100 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, nisi!
          </p>
        </div>
      </div>
    </DotBackground>
  );
};

export default Hero;
