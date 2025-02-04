import Hero from '@/components/hero';
import { FloatingNav } from '@/components/ui/floating-navbar';

const navItems = [
  {
    name: 'Home',
    link: '#',
  },
  {
    name: 'About',
    link: '#',
  },
  {
    name: 'Contact',
    link: '#',
  },
];

export default function Home() {
  return (
    <main className="bg-black-100 flex flex-col items-center justify-center mx-auto overflow-hidden p-5 relative sm:px-10">
      <div className="max-w-6xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
