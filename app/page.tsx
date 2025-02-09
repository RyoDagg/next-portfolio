import About from '@/components/about';
import Hero from '@/components/hero';
import Technologies from '@/components/technologies';
import Projects from '@/components/projects';
import { IoConstruct } from 'react-icons/io5';

export default function Home() {
  return (
    <main className="bg-black-100 flex flex-col items-center justify-center mx-auto relative">
      <div className="w-full">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <div className="h-[32rem]">
          <div className="flex justify-center items-center mt-10 gap-4">
            <IoConstruct className="text-6xl text-gray-200" />
            <h1 className="text-5xl font-semibold uppercase text-gray-200 text-center">
              under construction...
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
