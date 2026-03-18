import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setStatus("error");
      setErrorMsg(result.error.errors[0].message);
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Join the Future of{" "}
            <span className="text-primary text-glow-cyan">Location Intelligence</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
            Be among the first to experience Locus AR. Sign up for early access and shape the future of tracking.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") { setStatus("idle"); setErrorMsg(""); }
              }}
              placeholder="Enter your email"
              maxLength={255}
              className="flex-1 w-full h-12 rounded-lg bg-muted/60 border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-[var(--glow-cyan)] hover:shadow-[var(--glow-cyan-lg)] hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              Get Early Access
              <ArrowRight size={15} />
            </button>
          </motion.form>

          {status === "error" && (
            <p className="mt-3 text-xs text-destructive">{errorMsg}</p>
          )}
          {status === "success" && (
            <p className="mt-3 text-xs text-primary">You're on the list! We'll be in touch.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
