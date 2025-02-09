export function DotBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full bg-dot-gray-700 relative flex items-center justify-center overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
