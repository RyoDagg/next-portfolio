import Hero from '@/components/hero';

export default function Home() {
  return (
    <main className="bg-black-100 flex flex-col items-center justify-center mx-auto overflow-hidden p-5 relative sm:px-10">
      <div className="max-w-6xl w-full">
        <Hero />
      </div>
    </main>
  );
}
