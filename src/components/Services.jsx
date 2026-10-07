function Services() {
  const services = [
    {
      number: "01",
      title: "Business Websites",
      description:
        "Professional, responsive websites designed to give businesses a strong and credible online presence.",
      tags: ["Responsive", "Modern UI", "SEO Ready"],
    },
    {
      number: "02",
      title: "Landing Pages",
      description:
        "Focused landing pages built to present your offer clearly and guide visitors toward taking action.",
      tags: ["Conversion Focused", "Responsive", "Fast"],
    },
    {
      number: "03",
      title: "MERN Applications",
      description:
        "Full-stack web applications with modern React interfaces, reliable backend systems, APIs, and databases.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      number: "04",
      title: "Website Redesign",
      description:
        "Refreshing outdated websites with cleaner layouts, better responsiveness, improved usability, and modern UI.",
      tags: ["UI Upgrade", "Mobile Friendly", "Performance"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-24 md:px-10 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/4 h-[450px] w-[450px] rounded-full bg-violet-500/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400/70" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                05. Services
              </p>
            </div>

            <h2 className="font-[Space_Grotesk] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              What I can
              <span className="block text-zinc-500">
                build for you.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-zinc-500 sm:text-base">
            From business websites to full-stack applications, I focus on
            building clean digital experiences that are responsive, practical,
            and aligned with the project's goals.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="premium-card group min-h-[300px] p-7 sm:p-8"
            >
              {/* Background number */}
              <span className="pointer-events-none absolute -right-2 -top-7 select-none font-[Space_Grotesk] text-[150px] font-semibold leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-violet-300/[0.045]">
                {service.number}
              </span>

              <div className="relative flex h-full flex-col">
                {/* Number + indicator */}
                <div className="flex items-center justify-between">
                  <span className="font-[Space_Grotesk] text-sm font-medium text-violet-300/60">
                    {service.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-violet-400/60 shadow-[0_0_14px_rgba(167,139,250,0.35)] transition-transform duration-300 group-hover:scale-125" />
                </div>

                {/* Content */}
                <div className="mt-12">
                  <h3 className="font-[Space_Grotesk] text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-500">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-8 h-px w-0 bg-violet-400/70 transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-violet-400/[0.12] bg-violet-400/[0.025] px-6 py-7 sm:px-8">
          <div className="pointer-events-none absolute right-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-[70px]" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300/60">
                Have a project in mind?
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Let's turn your idea into a polished digital experience.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              Let's discuss

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;