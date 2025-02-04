import About from '@/components/about';
import Hero from '@/components/hero';
import { FloatingNav } from '@/components/ui/floating-navbar';

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
        <div className="h-[128rem]"></div>
      </div>
    </main>
  );
}
