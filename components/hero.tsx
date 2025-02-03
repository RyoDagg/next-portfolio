import { DotBackground } from "./ui/dot-background";
import { Spotlight } from "./ui/spotlight";
import { TypewriterEffect } from "./ui/typewriter-effect";

const Hero = () => {
  return (
    <DotBackground>
      <div className="h-96 w-full flex flex-col items-center justify-center relative">
        <Spotlight />
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <h2 className="text-xl sm:text-lg uppercase font-medium bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-gray-700">
            Abdelkader Protfolio Fullstack Developer
          </h2>
          <TypewriterEffect
            className="my-4"
            words={[
              {
                text: "Build lorem ipsum dolor sit amet consectetur adipiscing",
              },
              {
                text: "Aceternity.",
                className: "text-blue-500",
              },
            ]}
          />
        </div>
      </div>
    </DotBackground>
  );
};

export default Hero;
