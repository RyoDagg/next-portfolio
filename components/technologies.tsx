import { FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { SiExpress, SiNextdotjs } from 'react-icons/si';

const Technologies = () => {
  return (
    <section className="mx-auto relative w-full py-16">
      <h3 className="text-5xl text-gray-300 font-bold text-center my-16">
        Technologies I use
      </h3>
      <InfiniteMovingCards speed="normal" className="mx-auto">
        <li>
          <div className="felx felx-col justufy-center align-center">
            <FaReact className="w-16 h-16 mx-12 text-blue-500" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              ReactJs
            </p>
          </div>
        </li>
        <li>
          <div className="felx felx-col justufy-center align-center">
            <FaLaravel className="w-16 h-16 mx-12 text-red-500" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              Laravel
            </p>
          </div>
        </li>
        <li>
          <div className="felx felx-col justufy-center align-center">
            <FaNodeJs className="w-16 h-16 mx-12 text-green-500" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              NodeJs
            </p>
          </div>
        </li>
        <li>
          <div className="felx felx-col justufy-center align-center">
            <SiNextdotjs className="w-16 h-16 mx-12 text-gray-200" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              NextJS
            </p>
          </div>
        </li>
        <li>
          <div className="felx felx-col justufy-center align-center">
            <SiExpress className="w-16 h-16 mx-12 rounded-full bg-gray-800 p-2 text-white" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              ExpressJs
            </p>
          </div>
        </li>
        <li>
          <div className="felx felx-col justufy-center align-center">
            <FaReact className="w-16 h-16 mx-12 text-blue-500" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              ReactJs
            </p>
          </div>
        </li>
        <li>
          <div className="felx felx-col justufy-center align-center">
            <FaLaravel className="w-16 h-16 mx-12 text-red-500" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              Laravel
            </p>
          </div>
        </li>
        <li>
          <div className="felx felx-col justufy-center align-center">
            <FaNodeJs className="w-16 h-16 mx-12 text-green-500" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              NodeJs
            </p>
          </div>
        </li>
        <li>
          <div className="felx felx-col justufy-center align-center">
            <SiNextdotjs className="w-16 h-16 mx-12 text-gray-200" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              NextJS
            </p>
          </div>
        </li>
        <li>
          <div className="felx felx-col justufy-center align-center">
            <SiExpress className="w-16 h-16 mx-12 rounded-full bg-gray-800 p-2 text-white" />
            <p className="text-xl text-gray-200 text-center font-bold mt-2">
              ExpressJs
            </p>
          </div>
        </li>
      </InfiniteMovingCards>
    </section>
  );
};

export default Technologies;
