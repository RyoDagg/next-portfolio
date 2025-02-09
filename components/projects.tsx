import Image from 'next/image';

import knowMeImage from '../public/websites/knowme.png';
import linkeraImage from '../public/websites/linkera.png';
import portfolioImage from '../public/websites/portfolio.png';
import lestricolores from '../public/websites/lestricolores.png';
import lestricoloresApp from '../public/websites/lestricolores-app.jpg';
import { WobbleCard } from './ui/wobble-card';
import { CgArrowTopRight } from 'react-icons/cg';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      name: 'KnoW Me',
      bgImage: knowMeImage,
      image: knowMeImage,
      website: 'knowme.tn',
    },
    {
      name: 'Linkera',
      bgImage: linkeraImage,
      image: linkeraImage,
      website: 'app.linkera.com',
    },
    {
      name: 'My portfolio',
      bgImage: portfolioImage,
      image: portfolioImage,
      website: 'abdelkader-mannai.tn',
    },
    {
      name: 'Les Tricolores',
      bgImage: lestricolores,
      image: lestricoloresApp,
      website: 'lestricolores.fr',
    },
  ];

  return (
    <div className="relative w-full snap-start">
      <div className="sticky h-[50vh] top-0 p-8">
        <h3 className="text-7xl text-gray-300 font-bold text-center my-16">
          Sample Projects
        </h3>
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`sticky top-0 h-screen p-8 w-full bg-black-100 flex items-center justify-center overflow-hidden`}
        >
          <Image
            objectFit="cover"
            layout="fill"
            objectPosition="top center"
            src={project.bgImage}
            alt={project.name}
            className="w-full h-full object-cover blur-sm opacity-50"
          />
          <WobbleCard
            containerClassName={`max-w-2xl bg-black-100/70 backdrop-blur-lg border border-gray-500 rounded-md flex flex-col items-center text-center`}
          >
            <h4 className="text-gray-100 font-semibold text-3xl mt-4 mb-6">
              {project.name}
            </h4>
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              className="border-2 mx-auto w-full max-h-96"
            />
            <Link
              href={`https://${project.website}`}
              target="_blank"
              className="text-gray-300 text-xl flex items-center justify-center gap-1 hover:text-blue-500 transition-colors duration-300 mt-8 mb-4"
            >
              {project.website} <CgArrowTopRight />
            </Link>
          </WobbleCard>
        </div>
      ))}
    </div>
  );
};

export default Projects;
