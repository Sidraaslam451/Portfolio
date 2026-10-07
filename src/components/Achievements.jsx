function Achievements() {
  const achievements = [
    {
      number: "01",
      value: "5+",
      title: "Full-Stack Projects",
      category: "Development",
      description:
        "Built and deployed full-stack and responsive web projects from concept through production.",
    },
    {
      number: "02",
      value: "20+",
      title: "Reusable UI Components",
      category: "Frontend Development",
      description:
        "Developed reusable interface components focused on consistency, efficiency, and maintainability.",
    },
    {
      number: "03",
      value: "FEM",
      title: "Hackathon Participation",
      category: "Hackathon",
      description:
        "Participated in an intensive full-stack development hackathon under the Saylani Mass Training Programme.",
    },
    {
      number: "04",
      value: "5+",
      title: "Custom Web Solutions",
      category: "Freelance",
      description:
        "Delivered custom web solutions covering development, responsive design, optimization, and deployment.",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative overflow-hidden border-t border-cream/[0.06] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-180px] top-1/4 h-[500px] w-[500px] rounded-full bg-dusty/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-dusty/70" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mauve">
                09. Achievements
              </p>
            </div>

            <h2 className="font-[Space_Grotesk] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
              Milestones that
              <span className="block text-mauve">
                reflect my growth.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-mauve sm:text-base">
            A few milestones from my journey in web development, freelance
            work, technical learning, and building real-world projects.
          </p>
        </div>

        {/* Achievement cards */}
        <div className="mt-12 md:mt-16 grid gap-4 md:grid-cols-2">
          {achievements.map((achievement) => (
            <div
              key={achievement.number}
              className="premium-card group min-h-[260px] sm:min-h-[300px] p-7 sm:p-8"
            >
              {/* Background number */}
              <span className="pointer-events-none absolute -right-3 -top-8 select-none font-[Space_Grotesk] text-[150px] font-semibold leading-none text-cream/[0.025] transition-colors duration-500 group-hover:text-dusty/[0.045]">
                {achievement.number}
              </span>

              <div className="relative flex h-full flex-col">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="font-[Space_Grotesk] text-5xl font-semibold tracking-[-0.05em] text-dusty/70 transition-colors duration-300 group-hover:text-cream">
                    {achievement.value}
                  </span>

                  <span className="rounded-full border border-cream/[0.07] bg-cream/[0.025] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-mauve">
                    {achievement.category}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto pt-12">
                  <h3 className="font-[Space_Grotesk] text-2xl font-semibold tracking-tight text-cream transition-colors duration-300 group-hover:text-cream">
                    {achievement.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-mauve">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-7 h-px w-0 bg-dusty/70 transition-all duration-500 group-hover:w-20 sm:left-8" />
            </div>
          ))}
        </div>

        {/* Growth strip */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-cream/[0.06] bg-cream/[0.018] px-6 py-7 sm:px-8">
          <div className="pointer-events-none absolute right-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-dusty/[0.05] blur-[70px]" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-dusty/80">
                Continuous Growth
              </p>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-mauve">
                Continuously learning, building, and improving through
                real-world projects and development experiences.
              </p>
            </div>

            <div className="flex items-center gap-2 whitespace-nowrap text-xs text-mauve">
              <span className="h-1.5 w-1.5 rounded-full bg-dusty" />
              Still building
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;