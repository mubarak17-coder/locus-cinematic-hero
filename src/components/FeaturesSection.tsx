import { motion } from "framer-motion";
import { MapPin, ScanEye, BatteryCharging, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description:
      "Pinpoint accuracy across any environment. Know exactly where your items are — indoors, outdoors, in motion.",
  },
  {
    icon: ScanEye,
    title: "AR Visualization & Detection",
    description:
      "See tracking data overlaid on the real world. Point your device and let augmented reality guide you.",
  },
  {
    icon: BatteryCharging,
    title: "Battery & Status Monitoring",
    description:
      "Live diagnostics for every tracker. Battery levels, signal strength, and connectivity — all at a glance.",
  },
  {
    icon: ShieldCheck,
    title: "Family Safety Network",
    description:
      "Create trusted circles. Share locations with family members and receive instant alerts when it matters most.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: "easeOut" },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Subtle top separator glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Powered by{" "}
            <span className="text-primary text-glow-cyan">Precision</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
            Four pillars of technology working together to keep you connected.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative rounded-2xl glass p-6 sm:p-8 flex flex-col gap-4 hover:border-primary/30 transition-colors duration-500"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:shadow-[var(--glow-cyan)] transition-shadow duration-500">
                <feature.icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
