import { HeroCard } from './ui/hero-card';
import { DotBackground } from './ui/dot-background';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffect } from './ui/typewriter-effect';
import { PiTerminalWindowDuotone } from 'react-icons/pi';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Hero = () => {
  return (
    <DotBackground>
      <div className="h-screen w-full max-w-7xl relative p-8">
        <Spotlight />
        <div className="grid grid-cols-1 md:grid-cols-3 mt-28">
          <div className="flex flex-col items-start gap-4 justify-start col-span-2 h-full w-full text-center">
            <h2 className="text-4xl uppercase font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-gray-400">
              Abdelkader Mannai
            </h2>
            <h3 className="flex items-center gap-2 text-3xl uppercase font-semibold text-gray-200">
              <PiTerminalWindowDuotone className="w-12 h-12 text-teal-500" />{' '}
              Full-Stack Developer
            </h3>
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
                  text: 'limits',
                  className: 'text-red-500 line-through italic',
                },
                {
                  text: '.',
                },
              ]}
            />
            <div className="flex items-center justify-center my-4 gap-8">
              <Link
                href="https://www.linkedin.com/in/abdelkader-mannai/"
                target="_blank"
              >
                <FaLinkedin className="w-16 h-16 text-blue-600 hover:drop-shadow-md hover:text-blue-800" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abdelkader-mannai/"
                target="_blank"
              >
                <FaGithub className="w-16 h-16 text-gray-100 hover:drop-shadow-md hover:text-gray-400" />
              </Link>
              <Link href="mailto:mannai.abdlkader@gmail.com" target="_blank">
                <SiGmail className="w-16 h-16 text-red-600 hover:drop-shadow-md hover:text-red-800" />
              </Link>
            </div>
            <p className="text-2xl font-medium text-gray-200 mt-4">
              <span className="underline italic font-bold">#KIS</span>: Keep It
              Simple 😉
            </p>
          </div>
          <div className="col-span-1">
            <HeroCard />
          </div>
        </div>
      </div>
    </DotBackground>
  );
};

export default Hero;
