import { motion } from "framer-motion";
import { Sticker, Smartphone, Radar, Bell } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Sticker,
    title: "Attach the Sticker",
    description:
      "Place a razor-thin Locus tracker on any item — keys, wallet, luggage. It's waterproof and built to last.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Pair in the App",
    description:
      "Open Locus AR, scan the sticker, and assign it to a profile. Setup takes less than ten seconds.",
  },
  {
    number: "03",
    icon: Radar,
    title: "Track in Real Time",
    description:
      "See every item on a live map — or switch to AR view and follow the overlay to pinpoint its exact location.",
  },
  {
    number: "04",
    icon: Bell,
    title: "Get Instant Alerts",
    description:
      "Receive smart notifications when items leave a safe zone or when family members arrive at key locations.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Separator glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            How It{" "}
            <span className="text-primary text-glow-cyan">Works</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
            From sticker to safety — in four effortless steps.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex items-start gap-6 sm:gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.12 * i,
                  ease: "easeOut" as const,
                }}
              >
                {/* Node on the line */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[var(--glow-cyan)] group">
                  <step.icon size={22} strokeWidth={1.6} className="sm:w-6 sm:h-6" />
                  {/* Pulse ring on hover-like idle animation for first item */}
                  {i === 0 && (
                    <span className="absolute inset-0 rounded-2xl border border-primary/20 animate-ar-ring" />
                  )}
                </div>

                {/* Content card */}
                <div className="glass rounded-2xl p-6 sm:p-8 flex-1 hover:border-primary/20 transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-xs font-bold tracking-widest text-primary/60 uppercase">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
