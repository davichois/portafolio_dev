"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const socialLinks = [
  { name: "Email", icon: Mail, url: "mailto:davidscite34@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Use usage of useGSAP consistent with local hook definition:
  // It returns the scope ref which must be attached to the container
  const containerRef = useGSAP(() => {
    // Footer content reveal animation
    gsap.from(".footer-content", {
      scrollTrigger: {
        trigger: ".footer-content", // Trigger relative to content or container
        start: "top 95%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <footer
      ref={containerRef}
      className="relative pb-20"
    >
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[320px] h-80 bg-foreground/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-480 mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col gap-16 mb-16">
          {/* Middle Section: Large Name Branding */}
          <div className="footer-content border-y border-border py-12">
            <h1 className="text-[clamp(3rem,10vw,12rem)] font-black uppercase text-foreground/15 leading-none text-center select-none pointer-events-none">
              davichois
            </h1>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="footer-content flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p className="text-foreground/45 text-xs uppercase tracking-wider">
              © {currentYear} David Prada Linarez
            </p>
            <span className="hidden md:block text-foreground/15">|</span>
            <p className="text-foreground/45 text-xs uppercase tracking-wider">
              davichois
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="group p-2 rounded-full border border-border bg-muted/40 hover:bg-muted hover:border-foreground/25 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4 text-foreground/55 group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
