function Experience() {
  const experiences = [
    {
      number: "01",
      role: "Web Developer",
      company: "Remote Internship",
      period: "3 Months",
      description:
        "Worked as a remote web developer intern, gaining practical experience in web development and working on real-world development tasks.",
      type: "Professional Experience",
    },
    {
      number: "02",
      role: "Educator / Teacher",
      company: "The Eeman Academy",
      period: "3 Years",
      description:
        "Taught and mentored students while developing strong communication, problem-solving, and the ability to explain complex concepts clearly.",
      type: "Teaching Experience",
    },
    {
      number: "03",
      role: "Freelance Web Developer",
      company: "Freelance Projects",
      period: "Ongoing",
      description:
        "Building responsive websites and modern web applications for clients while managing projects from development through deployment.",
      type: "Freelance",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-cream/[0.06] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-dusty/[0.03] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-dusty/70" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mauve">
                08. Journey
              </p>
            </div>

            <h2 className="font-[Space_Grotesk] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
              Experience that
              <span className="block text-mauve">
                shaped my work.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-mauve sm:text-base">
            A combination of professional experience, teaching, and freelance
            development has shaped the way I approach technology,
            communication, and problem solving.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 md:mt-16">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-cream/[0.07] md:block" />

          <div className="space-y-5">
            {experiences.map((experience) => (
              <div
                key={experience.number}
                className="group relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-[13px] top-8 hidden h-3 w-3 rounded-full border border-dusty/40 bg-ink shadow-[0_0_15px_rgba(201,173,167,0.15)] transition-all duration-300 group-hover:scale-125 group-hover:border-dusty/80 md:block" />

                <div className="premium-card p-6 sm:p-8 lg:p-9">
                  <div className="grid gap-7 lg:grid-cols-[110px_1fr_170px] lg:items-start">
                    {/* Number */}
                    <div>
                      <span className="font-[Space_Grotesk] text-4xl font-semibold tracking-[-0.04em] text-dusty/40 transition-colors duration-300 group-hover:text-dusty/70">
                        {experience.number}
                      </span>

                      <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-mauve">
                        Journey
                      </p>
                    </div>

                    {/* Main content */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-dusty/10 bg-dusty/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-dusty/80">
                          {experience.type}
                        </span>
                      </div>

                      <h3 className="mt-5 font-[Space_Grotesk] text-2xl font-semibold tracking-tight text-cream transition-colors duration-300 group-hover:text-cream sm:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm text-mauve">
                        {experience.company}
                      </p>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-mauve">
                        {experience.description}
                      </p>
                    </div>

                    {/* Period */}
                    <div className="border-t border-cream/[0.06] pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mauve">
                        Duration
                      </p>

                      <p className="mt-2 font-[Space_Grotesk] text-lg font-medium text-cream/85">
                        {experience.period}
                      </p>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-dusty/70 transition-all duration-500 group-hover:w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-cream/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-mauve">
            Learn · Experience · Build
          </p>

          <p className="text-xs text-mauve">
            Every experience adds something to the next project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;