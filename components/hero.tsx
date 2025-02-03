import { DotBackground } from "./ui/dot-background";
import { Spotlight } from "./ui/spotlight";
import { TypewriterEffect } from "./ui/typewriter-effect";

const Hero = () => {
  return (
    <DotBackground>
      <div className="h-96 w-full flex flex-col items-center justify-center relative">
        <Spotlight />
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <h2 className="text-md sm:text-2xl uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-gray-500">
            Fullstack Developer
          </h2>
          <TypewriterEffect
            className="my-4 uppercase font-semibold"
            words={[
              {
                text: "I build with",
              },
              {
                text: "agility",
                className: "text-orange-500 font-bold italic",
              },
              {
                text: "adapting as I",
              },
              {
                text: "code",
                className: "text-blue-500 font-black",
              },
              {
                text: "without",
              },
              {
                text: "limits.",
                className: "text-red-500 line-through italic",
              },
            ]}
          />
          <p className="text-xs md:text-lg font-medium text-gray-100 mt-2">
            👋 Hi, I'm Abdelkader! A passionate Fullstack Developer who loves
            building 🌐 web and 📱mobile applications.
          </p>
        </div>
      </div>
    </DotBackground>
  );
};

export default Hero;
