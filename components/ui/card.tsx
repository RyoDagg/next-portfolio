'use client';
import { animate } from 'framer-motion';
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

export function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ['translateY(0px)', 'translateY(-4px)', 'translateY(0px)'];
  const sequence = [
    [
      '.circle-1',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-2',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-3',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-4',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      '.circle-5',
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-10 w-10 circle-1">
          <FaLaravel className="h-6 w-6 text-red-500" />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <FaNodeJs className="h-6 w-6 text-green-500" />
        </Container>
        <Container className="circle-3 w-16 h-16">
          <FaReact className="h-10 w-10 text-blue-500 animate-[spin_3s_linear_infinite]" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <SiNextdotjs className="h-6 w-6 text-white" />
        </Container>
        <Container className="h-10 w-10 circle-5">
          <SiTypescript className="h-4 w-4 text-blue-500" />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move"></div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-black-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        'h-[15rem] md:h-[20rem] rounded-xl z-40',
        className,
        showGradient &&
          'bg-transparent [mask-image:radial-gradient(50%_50%_at_50%_50%,red_70%,transparent_90%)]'
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(80,80,80,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
