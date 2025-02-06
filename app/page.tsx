import About from '@/components/about';
import Hero from '@/components/hero';
import Technologies from '@/components/technologies';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { IoConstruct } from 'react-icons/io5';

const navItems = [
  {
    name: 'Home',
    link: '#',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Contact',
    link: '#',
  },
];

export default function Home() {
  return (
    <main className="bg-black-100 flex flex-col items-center justify-center mx-auto overflow-hidden relative">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Technologies />
        <div className="h-[128rem]">
          <div className="flex justify-center items-center mt-10 gap-4">
            <IoConstruct className="text-7xl text-gray-200" />
            <h1 className="text-7xl text-gray-200 text-center">
              COMING SOON...
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
