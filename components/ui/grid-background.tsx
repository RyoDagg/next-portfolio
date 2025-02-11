export function GridBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-grid-blue-900/30 relative flex justify-center overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_90%)]"></div>
      {children}
    </div>
  );
}
