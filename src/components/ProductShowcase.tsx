import { motion } from "framer-motion";
import { MapPin, Battery, ShieldAlert, Clock, Wifi, Navigation, AlertTriangle, Users } from "lucide-react";

const trackers = [
  { id: 1, name: "Keys", x: "28%", y: "38%", battery: 92, status: "active" },
  { id: 2, name: "Backpack", x: "62%", y: "52%", battery: 78, status: "active" },
  { id: 3, name: "Wallet", x: "45%", y: "30%", battery: 15, status: "low" },
  { id: 4, name: "Mom", x: "72%", y: "35%", battery: 64, status: "active" },
];

const eventLog = [
  { time: "2 min ago", event: "Keys arrived at Home Zone", icon: MapPin },
  { time: "18 min ago", event: "Backpack left Safe Zone", icon: AlertTriangle },
  { time: "1 hr ago", event: "Mom checked in at Work", icon: Users },
  { time: "3 hr ago", event: "Wallet battery low warning", icon: Battery },
];

const MapMockup = () => (
  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted/40 border border-border/60">
    {/* Map grid background */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />

    {/* Simulated roads */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
      <path d="M0 150 Q100 140 200 130 T400 160" stroke="hsl(var(--muted-foreground))" strokeWidth="0.8" fill="none" opacity="0.15" />
      <path d="M0 100 Q150 110 250 90 T400 120" stroke="hsl(var(--muted-foreground))" strokeWidth="0.6" fill="none" opacity="0.1" />
      <path d="M150 0 Q160 100 170 200 T140 300" stroke="hsl(var(--muted-foreground))" strokeWidth="0.8" fill="none" opacity="0.15" />
      <path d="M280 0 Q270 80 290 160 T260 300" stroke="hsl(var(--muted-foreground))" strokeWidth="0.6" fill="none" opacity="0.1" />
    </svg>

    {/* Zone circle */}
    <div
      className="absolute w-32 h-32 rounded-full border border-primary/20 bg-primary/[0.04]"
      style={{ left: "20%", top: "25%", transform: "translate(-50%, -50%)" }}
    />
    <span className="absolute text-[9px] font-medium text-primary/40 tracking-wider uppercase" style={{ left: "13%", top: "42%" }}>
      Home Zone
    </span>

    {/* Tracker pins */}
    {trackers.map((t, i) => (
      <motion.div
        key={t.id}
        className="absolute flex flex-col items-center"
        style={{ left: t.x, top: t.y, transform: "translate(-50%, -100%)" }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
      >
        {/* Ping */}
        <span className={`absolute -bottom-1 w-5 h-5 rounded-full animate-ar-pulse ${t.status === "low" ? "bg-destructive/30" : "bg-primary/20"}`} />
        {/* Pin */}
        <div className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-primary-foreground text-[10px] font-bold shadow-lg ${t.status === "low" ? "bg-destructive" : "bg-primary"}`}>
          <MapPin size={13} />
        </div>
        {/* Label */}
        <span className="mt-1 glass rounded-md px-1.5 py-0.5 text-[9px] font-medium text-foreground whitespace-nowrap">
          {t.name}
        </span>
      </motion.div>
    ))}

    {/* Top bar overlay */}
    <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-2.5 bg-background/60 backdrop-blur-md border-b border-border/40">
      <div className="flex items-center gap-2">
        <Navigation size={13} className="text-primary" />
        <span className="text-[11px] font-display font-semibold text-foreground">Live Map</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Wifi size={11} className="text-primary" />
        <span className="text-[10px] text-muted-foreground">4 active</span>
      </div>
    </div>
  </div>
);

const SidePanel = () => (
  <div className="flex flex-col gap-4">
    {/* Battery status card */}
    <div className="glass rounded-2xl p-5">
      <h4 className="font-display text-xs font-bold tracking-widest text-primary/60 uppercase mb-4">Device Status</h4>
      <div className="space-y-3">
        {trackers.map((t) => (
          <div key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`w-2 h-2 rounded-full ${t.status === "low" ? "bg-destructive" : "bg-primary"}`} />
              <span className="text-sm text-foreground">{t.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full ${t.battery > 30 ? "bg-primary" : "bg-destructive"}`}
                  style={{ width: `${t.battery}%` }}
                />
              </div>
              <span className={`text-[11px] font-medium ${t.battery > 30 ? "text-muted-foreground" : "text-destructive"}`}>
                {t.battery}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* SOS card */}
    <div className="glass rounded-2xl p-5 border-destructive/20">
      <div className="flex items-center gap-2 mb-3">
        <ShieldAlert size={15} className="text-destructive" />
        <h4 className="font-display text-xs font-bold tracking-widest text-destructive/80 uppercase">SOS Alert</h4>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
        Trigger an instant alert to your trusted circle with live location sharing.
      </p>
      <div className="h-8 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive text-[11px] font-semibold">
        Hold to Activate SOS
      </div>
    </div>

    {/* Event log */}
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Clock size={13} className="text-primary" />
        <h4 className="font-display text-xs font-bold tracking-widest text-primary/60 uppercase">Event Log</h4>
      </div>
      <div className="space-y-3">
        {eventLog.map((e, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <e.icon size={12} className="text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-foreground leading-snug">{e.event}</p>
              <span className="text-[10px] text-muted-foreground">{e.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProductShowcase = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Your Command{" "}
            <span className="text-primary text-glow-cyan">Center</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
            A single dashboard to monitor, protect, and locate — everything you care about, at a glance.
          </p>
        </motion.div>

        {/* Dashboard mock */}
        <motion.div
          className="relative max-w-5xl mx-auto glass rounded-3xl p-3 sm:p-4 border border-border/40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          {/* App chrome bar */}
          <div className="flex items-center gap-2 px-3 py-2 mb-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            </div>
            <div className="flex-1 mx-8">
              <div className="max-w-xs mx-auto h-5 rounded-md bg-muted/60 flex items-center justify-center">
                <span className="text-[10px] text-muted-foreground">locus-ar.app/dashboard</span>
              </div>
            </div>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3">
              <MapMockup />
            </div>
            <div className="lg:col-span-2">
              <SidePanel />
            </div>
          </div>
        </motion.div>

        {/* Capability callouts */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: "Multi-device tracking", desc: "Monitor up to 20 items simultaneously" },
            { label: "Geofence alerts", desc: "Instant notifications when items leave zones" },
            { label: "Family sharing", desc: "Trusted circles with privacy controls" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-sm font-display font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
