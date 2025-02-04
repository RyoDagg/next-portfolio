import { CardDemo } from './ui/card';
import { DotBackground } from './ui/dot-background';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffect } from './ui/typewriter-effect';

const Hero = () => {
  return (
    <DotBackground>
      <div className="h-screen w-full max-w-6xl relative p-8">
        <Spotlight />
        <div className="grid grid-cols-1 md:grid-cols-3 mt-28">
          <div className="flex flex-col items-start justify-start col-span-2 h-full w-full text-center">
            <h2 className="text-3xl uppercase font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-gray-400">
              Abdelkader Mannai
            </h2>
            <TypewriterEffect
              className="my-4 uppercase font-semibold text-left text-7xl"
              words={[
                {
                  text: 'I build',
                },
                {
                  text: 'with',
                },
                {
                  text: 'agility',
                  className: 'text-orange-500 font-bold italic',
                },
                {
                  text: 'adapting',
                },
                {
                  text: 'as I',
                },
                {
                  text: 'code',
                  className: 'text-blue-500 font-black',
                },
                {
                  text: 'without',
                },
                {
                  text: 'limits.',
                  className: 'text-red-500 line-through italic',
                },
              ]}
            />
            <p className="text-xl font-medium text-gray-200 mt-8">
              <span className="underline italic font-bold">#KIS</span>: Keep It
              Simple 😉
            </p>
          </div>
          <div className="col-span-1">
            <CardDemo />
          </div>
        </div>
      </div>
    </DotBackground>
  );
};

export default Hero;
