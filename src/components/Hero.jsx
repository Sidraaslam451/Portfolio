import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Sidraaslam451",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sidra-aslam-755765313",
      icon: <FaLinkedin />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sidra.webdev/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-0 items-center overflow-hidden px-5 pt-24 sm:px-6 lg:min-h-screen lg:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] -z-10 h-56 w-56 rounded-full bg-dusty/10 blur-[110px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[8%] -z-10 h-64 w-64 rounded-full bg-dusk/30 blur-[120px] sm:h-80 sm:w-80 sm:blur-[140px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradientcolor-mix(in srgb, var(--color-cream) 80%, transparent) 1px, transparent 1px), linear-gradient(90deg, rgba(242,233,228,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="mx-auto w-full max-w-7xl py-10 sm:py-16 lg:py-24">
        <div className="max-w-5xl">

          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cream/10 bg-cream/[0.04] px-4 py-2 text-xs font-medium text-mauve backdrop-blur-sm transition-colors duration-300 hover:border-dusty/40 hover:text-cream sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Available for freelance work
          </div>

          {/* Intro */}
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-mauve sm:text-sm">
            Hello, I'm
          </p>

          {/* Main Heading */}
          <h1 className="font-[Space_Grotesk] text-[clamp(2.5rem,11.5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.04em] text-cream sm:text-7xl sm:leading-[0.95] md:text-8xl lg:text-[7.5rem]">
            Sidra
            <span className="relative ml-2 inline-block whitespace-nowrap text-dusty sm:ml-3">
              Aslam
              <span className="absolute -bottom-2 left-1 h-px w-16 bg-mauve sm:w-24" />
            </span>
          </h1>

          {/* Role */}
          <div className="mt-8 flex items-center gap-3 sm:mt-9 sm:gap-4">
            <span className="h-px w-8 shrink-0 bg-dusk sm:w-12" />

            <h2 className="font-[Space_Grotesk] text-lg font-medium text-cream/90 sm:text-2xl">
              MERN Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-mauve sm:mt-6 sm:text-lg sm:leading-8">
            I build high-level responsive websites and modern web
            applications for international clients.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-dusty px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(201,173,167,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-cream hover:shadow-[0_0_35px_color-mix(in srgb, var(--color-cream) 80%, transparent)]"
            >
              View My Work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cream/15 bg-cream/[0.04] px-7 py-3.5 text-sm font-medium text-cream/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-dusty/50 hover:bg-cream/[0.08] hover:text-cream"
            >
              Let's Work Together
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/10 px-7 py-3.5 text-sm font-medium text-mauve transition-all duration-300 hover:-translate-y-1 hover:border-cream/30 hover:text-cream"
            >
              View Resume

              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            <span className="mr-2 text-[10px] font-medium uppercase tracking-[0.25em] text-mauve">
              Find me
            </span>

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-cream/[0.03] text-mauve transition-all duration-300 hover:-translate-y-1 hover:border-dusty/50 hover:bg-cream/[0.08] hover:text-dusty"
              >
                <span className="text-base">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-mauve/70 transition-colors hover:text-cream lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="relative h-10 w-px overflow-hidden bg-dusk">
          <span className="absolute left-0 top-0 h-1/2 w-full animate-pulse bg-dusty" />
        </span>
      </a>
    </section>
  );
}

export default Hero;