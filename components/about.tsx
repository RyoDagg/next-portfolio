import { BsArrowUpRight } from 'react-icons/bs';
import { BackgroundBeams } from './ui/background-beams';

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-8 shadow-[0px_5px_5px_4px_rgba(255,255,255,1)] mb-4"
    >
      <div className="flex items-center justify-center">
        <div className="max-w-5xl p-5 text-center text-gray-900">
          <h2 className="text-6xl font-bold my-4">About Me</h2>
          <p className="mt-8 text-2xl">
            Passionate Full-Stack Developer with 3+ years of experience building
            scalable web and mobile apps. Skilled in{' '}
            <span className="font-bold text-yellow-700">JavaScript</span>,{' '}
            <span className="font-bold text-purple-700">PHP</span> and
            responsive{' '}
            <span className="font-bold text-cyan-600">UI/UX design</span>,
            integration <span className="italic">(Pixel Perfect)</span>, with a
            focus on{' '}
            <span className="font-bold text-blue-700 italic">clean code</span>.
            Strong problem solver, fast learner and quick to adapt to new tools,
            and experienced in remote collaboration.
          </p>
          <a
            href="#"
            className="flex items-center justify-center mt-8 text-xl text-yellow-700"
          >
            Learn More <BsArrowUpRight />
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default About;
