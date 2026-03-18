import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/40">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Locus<span className="text-primary">AR</span>
            </span>
            <p className="text-xs text-muted-foreground">
              Next-generation AR tracking for what matters most.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Locus AR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
