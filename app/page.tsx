import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black-100 flex flex-col items-center justify-center mx-auto overflow-hidden p-5 relative sm:px-10">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl text-gray-200 text-center">
          <Spotlight />
          Abdelkader Protfolio
        </h1>
      </div>
    </main>
  );
}
