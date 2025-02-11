import { BsArrowUpRight } from 'react-icons/bs';
import { BackgroundBeams } from './ui/background-beams';

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-8 md:py-16 shadow-[0px_5px_5px_4px_rgba(255,255,255,1)] mb-4"
    >
      <div className="flex items-center justify-center">
        <div className="max-w-5xl px-4 md:p-5 text-center text-gray-900">
          <h2 className="text-4xl md:text-6xl font-bold my-4">About Me</h2>
          <p className="mt-6 md:mt-8 text-lg md:text-2xl">
            Passionate Full-Stack Developer with 3+ years of experience building
            scalable web and mobile apps. Skilled in{' '}
            <span className="font-bold text-yellow-700">JavaScript</span>,{' '}
            <span className="font-bold text-purple-700">PHP</span>, and
            responsive{' '}
            <span className="font-bold text-cyan-600">UI/UX design</span>,
            integration <span className="italic">(Pixel Perfect)</span>, with a
            focus on{' '}
            <span className="font-bold text-blue-700 italic">clean code</span>.
            Strong problem solver, fast learner, and quick to adapt to new
            tools, with experience in remote collaboration.
          </p>
          <a
            href="#"
            className="flex items-center justify-center mt-6 md:mt-8 text-lg md:text-xl text-yellow-700 hover:text-yellow-800 transition-colors"
          >
            Learn More <BsArrowUpRight className="ml-2" />
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default About;
