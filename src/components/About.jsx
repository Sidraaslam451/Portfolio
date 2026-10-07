function About() {
  const highlights = [
    {
      number: "01",
      title: "Responsive Development",
      description:
        "Interfaces designed to stay clean, usable, and consistent across desktop, tablet, and mobile.",
    },
    {
      number: "02",
      title: "Modern Technologies",
      description:
        "Using modern frontend and backend technologies to turn ideas into reliable digital products.",
    },
    {
      number: "03",
      title: "Client Focused",
      description:
        "Understanding the actual business goal behind a project and keeping communication clear throughout.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-cream/[0.06] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-dusty/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-cream/[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-dusty/70" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mauve">
                02. About
              </p>
            </div>

            <h2 className="max-w-xl font-[Space_Grotesk] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
              More than just
              <span className="block text-mauve">
                writing code.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-mauve sm:text-base">
            I'm Sidra Aslam, a MERN Stack Developer focused on building
            modern, responsive, and user-friendly web experiences. I enjoy
            turning ideas into functional digital products while continuously
            learning and exploring new technologies.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-12 md:mt-16 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Profile card */}
          <div className="premium-card group min-h-[400px] sm:min-h-[440px] p-7 sm:p-9">
            {/* Background number */}
            <span className="pointer-events-none absolute -right-3 -top-12 select-none font-[Space_Grotesk] text-[180px] font-semibold leading-none text-cream/[0.025]">
              02
            </span>

            {/* Accent glow */}
            <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-dusty/[0.06] blur-[90px]" />

            <div className="relative flex h-full flex-col">
              {/* Avatar */}
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dusty/20 bg-dusty/[0.07] font-[Space_Grotesk] text-xl font-semibold text-dusty shadow-[0_0_35px_rgba(201,173,167,0.08)]">
                  SA
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-mauve">
                  Developer
                </span>
              </div>

              {/* Profile */}
              <div className="mt-auto">
                <h3 className="font-[Space_Grotesk] text-3xl font-semibold tracking-tight text-cream">
                  Sidra Aslam
                </h3>

                <p className="mt-2 text-sm text-dusty/80">
                  MERN Stack Developer
                </p>

                <div className="mt-8 space-y-5 border-t border-cream/[0.06] pt-7">
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mauve">
                      Based in
                    </span>

                    <span className="text-right text-sm text-cream/70">
                      Karachi, Pakistan
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mauve">
                      Focus
                    </span>

                    <span className="text-right text-sm text-cream/70">
                      Web Development
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mauve">
                      Status
                    </span>

                    <div className="flex items-center gap-2 text-sm text-cream/70">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>

                      Available for work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-4">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="premium-card group p-6 sm:p-7"
              >
                <div className="relative flex gap-6">
                  {/* Number */}
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="font-[Space_Grotesk] text-sm font-medium text-dusty/80">
                      {item.number}
                    </span>

                    <span className="mt-3 h-full min-h-12 w-px bg-gradient-to-b from-dusty/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="pb-1">
                    <h3 className="font-[Space_Grotesk] text-xl font-semibold tracking-tight text-cream transition-colors duration-300 group-hover:text-cream sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-mauve">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 h-px w-0 bg-dusty/50 transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-cream/[0.06] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-mauve">
            Learn · Build · Improve
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm text-mauve transition-colors duration-300 hover:text-cream"
          >
            Let's work together

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;