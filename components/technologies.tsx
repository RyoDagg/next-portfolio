import { FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { SiExpo, SiExpress, SiNextdotjs } from 'react-icons/si';

const techs = [
  {
    icon: <FaReact className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />,
    name: 'ReactJs',
  },
  {
    icon: <FaLaravel className="w-12 h-12 md:w-16 md:h-16 text-red-500" />,
    name: 'Laravel',
  },
  {
    icon: <FaNodeJs className="w-12 h-12 md:w-16 md:h-16 text-green-500" />,
    name: 'NodeJs',
  },
  {
    icon: <SiNextdotjs className="w-12 h-12 md:w-16 md:h-16 text-gray-200" />,
    name: 'NextJs',
  },
  {
    icon: (
      <SiExpress className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-800 p-2 text-white" />
    ),
    name: 'ExpressJs',
  },
  {
    icon: <SiExpo className="w-12 h-12 md:w-16 md:h-16 text-gray-100" />,
    name: 'Expo',
  },
  {
    icon: <FaReact className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />,
    name: 'ReactJs',
  },
  {
    icon: <FaLaravel className="w-12 h-12 md:w-16 md:h-16 text-red-500" />,
    name: 'Laravel',
  },
  {
    icon: <FaNodeJs className="w-12 h-12 md:w-16 md:h-16 text-green-500" />,
    name: 'NodeJs',
  },
  {
    icon: <SiNextdotjs className="w-12 h-12 md:w-16 md:h-16 text-gray-200" />,
    name: 'NextJs',
  },
  {
    icon: (
      <SiExpress className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-800 p-2 text-white" />
    ),
    name: 'ExpressJs',
  },
  {
    icon: <SiExpo className="w-12 h-12 md:w-16 md:h-16 text-gray-100" />,
    name: 'Expo',
  },
];

const Technologies = () => {
  return (
    <section className="mx-auto relative w-full py-8 md:py-16">
      <h2 className="text-4xl md:text-6xl text-gray-300 font-bold text-center my-8 md:my-16">
        Technologies I use
      </h2>
      <InfiniteMovingCards speed="normal" className="mx-auto">
        {techs.map((tech, index) => (
          <li key={index}>
            <div className="flex flex-col justify-center items-center">
              {tech.icon}
              <p className="text-lg md:text-xl text-gray-200 text-center font-bold mt-2">
                {tech.name}
              </p>
            </div>
          </li>
        ))}
      </InfiniteMovingCards>
    </section>
  );
};

export default Technologies;
