'use client';

import { useEffect, useRef } from 'react';

const InfiniteScrollLogos = ({ children }: { children: React.ReactNode }) => {
  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;

      // Clone the element and insert it after the original
      const clonedElement = ul.cloneNode(true) as HTMLUListElement;
      ul.insertAdjacentElement('afterend', clonedElement);

      // Set the cloned element's attribute
      clonedElement.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {children}
      </ul>
    </div>
  );
};

export default InfiniteScrollLogos;
