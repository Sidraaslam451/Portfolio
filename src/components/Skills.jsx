function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description: "Building responsive and polished user interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      number: "02",
      title: "Backend",
      description: "Creating reliable server-side applications and APIs.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
      ],
    },
    {
      number: "03",
      title: "Database",
      description: "Working with structured and flexible data systems.",
      skills: [
        "MongoDB",
        "Mongoose",
      ],
    },
    {
      number: "04",
      title: "Tools & Workflow",
      description: "Tools that keep development organized and efficient.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vercel",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-cream/[0.06] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-180px] top-1/4 h-96 w-96 rounded-full bg-dusty/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-dusty/70" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mauve">
              03. Skills
            </p>
          </div>

          <h2 className="font-[Space_Grotesk] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
            Tools I use to turn
            <span className="block text-mauve">
              ideas into products.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-mauve sm:text-base">
            A practical stack built around modern frontend development,
            scalable backend technologies, databases, and a workflow focused
            on building reliable digital experiences.
          </p>
        </div>

        {/* Skills grid */}
        <div className="mt-12 md:mt-16 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="premium-card group min-h-[240px] sm:min-h-[280px] p-7 sm:p-8"
            >
              {/* Large background number */}
              <span className="pointer-events-none absolute -right-2 -top-5 select-none font-[Space_Grotesk] text-[130px] font-semibold leading-none text-cream/[0.025] transition-colors duration-500 group-hover:text-dusty/[0.045]">
                {group.number}
              </span>

              {/* Top row */}
              <div className="relative flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dusty/80">
                    {group.number}
                  </span>

                  <h3 className="mt-3 font-[Space_Grotesk] text-2xl font-semibold tracking-tight text-cream transition-colors duration-300 group-hover:text-cream">
                    {group.title}
                  </h3>
                </div>

                <span className="mt-1 h-2 w-2 rounded-full bg-dusty/60 shadow-[0_0_12px_rgba(201,173,167,0.35)]" />
              </div>

              {/* Description */}
              <p className="relative mt-4 max-w-sm text-sm leading-7 text-mauve">
                {group.description}
              </p>

              {/* Skill pills */}
              <div className="relative mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-cream/[0.07] bg-cream/[0.025] px-3 py-2 text-xs font-medium text-cream/70 transition-all duration-300 group-hover:border-cream/[0.11] group-hover:text-cream/85"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-7 h-px w-0 bg-dusty/60 transition-all duration-500 group-hover:w-16 sm:left-8" />
            </div>
          ))}
        </div>

        {/* Bottom learning strip */}
        <div className="relative mt-5 overflow-hidden rounded-2xl border border-cream/[0.06] bg-cream/[0.018] px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-dusty/80">
                Always learning
              </p>

              <p className="mt-2 max-w-xl text-sm leading-7 text-mauve">
                Exploring new technologies and improving my development
                workflow through real-world projects and continuous practice.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-mauve">
              <span className="h-1.5 w-1.5 rounded-full bg-dusty" />
              Growing with every project
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;