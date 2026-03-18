import { motion } from "framer-motion";

const ARVisualization = () => {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96">
      {/* Outer pulsing rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-primary/20 animate-ar-ring"
          style={{ animationDelay: `${i * 1}s` }}
        />
      ))}

      {/* Main glow ring */}
      <div className="absolute inset-8 rounded-full border-2 border-primary/40 animate-ar-pulse" />

      {/* Inner tracker device */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Device body */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-muted/80 border border-primary/30 flex items-center justify-center animate-float shadow-[var(--glow-cyan)]">
            {/* AR crosshair */}
            <svg viewBox="0 0 64 64" className="w-12 h-12 sm:w-16 sm:h-16 text-primary">
              <circle cx="32" cy="32" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
              <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.9" />
              {/* Corner brackets */}
              <path d="M12 22V12H22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M42 12H52V22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M52 42V52H42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M22 52H12V42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              {/* Cross lines */}
              <line x1="32" y1="0" x2="32" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="32" y1="44" x2="32" y2="64" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="0" y1="32" x2="20" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <line x1="44" y1="32" x2="64" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            </svg>
          </div>

          {/* Floating data points */}
          {[
            { x: -60, y: -40, delay: 0 },
            { x: 70, y: -30, delay: 0.5 },
            { x: -50, y: 50, delay: 1 },
            { x: 60, y: 45, delay: 1.5 },
          ].map((point, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/60 animate-ar-pulse"
              style={{
                left: `calc(50% + ${point.x}px)`,
                top: `calc(50% + ${point.y}px)`,
                animationDelay: `${point.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Ambient glow behind */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl animate-ar-pulse" />
    </div>
  );
};

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="fixed top-0 left-0 right-0 z-50 glass"
  >
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        Locus<span className="text-primary">AR</span>
      </span>
      <a
        href="#"
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        Get Started
      </a>
    </div>
  </motion.nav>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <Navbar />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center gap-12 lg:flex-row lg:text-left lg:gap-16">
          {/* Text content */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ar-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
                Next-Gen AR Tracking
              </span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Locus AR —{" "}
              <span className="text-primary text-glow-cyan">
                Track What Matters
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Bridging augmented reality with real-world safety. Locate your personal items and keep your family connected — all through a seamless AR experience.
            </p>

            <motion.div
              className="flex flex-wrap items-center gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold shadow-[var(--glow-cyan)] hover:shadow-[var(--glow-cyan-lg)] hover:bg-primary/90 transition-all duration-300 text-sm"
              >
                Explore Locus
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg glass text-foreground font-medium hover:bg-foreground/10 transition-all duration-300 text-sm gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </a>
            </motion.div>
          </motion.div>

          {/* AR Visualization */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ARVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
