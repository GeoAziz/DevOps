import { useMemo } from 'react';

// Generate deterministic particles with stable random values
function generateParticles() {
  return [...Array(20)].map((_, i) => {
    // Seed-based random generation for deterministic but varied positions
    // Using index as seed to ensure consistency across re-renders
    const seed = i * 73; // Prime multiplier for better distribution
    const rand1 = (Math.sin(seed) * 10000) % 1;
    const rand2 = (Math.sin(seed * 2) * 10000) % 1;
    const rand3 = (Math.sin(seed * 3) * 10000) % 1;
    const rand4 = (Math.sin(seed * 4) * 10000) % 1;

    return {
      id: i,
      left: Math.abs(rand1) * 100,
      top: Math.abs(rand2) * 100,
      duration: 3 + Math.abs(rand3) * 4,
      delay: Math.abs(rand4) * 2,
    };
  });
}

export const Grid3DBackground = () => {
  // Generate particles once and memoize them to prevent recalculation on re-renders
  const particles = useMemo(() => generateParticles(), []);

  return (
    <>
      {/* CSS Grid Background */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
        
        {/* Animated scan lines */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, transparent 0%, rgba(0, 255, 65, 0.1) 50%, transparent 100%)',
            animation: 'scanline 8s linear infinite',
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary-500 rounded-full opacity-30"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
