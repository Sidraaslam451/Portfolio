const skillCategories = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", short: "HTML" },
      { name: "CSS3", short: "CSS" },
      { name: "JavaScript", short: "JS" },
      { name: "React", short: "RE" },
      { name: "Tailwind CSS", short: "TW" },
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "Creating reliable server-side applications and APIs.",
    skills: [
      { name: "Node.js", short: "NO" },
      { name: "Express.js", short: "EX" },
      { name: "REST APIs", short: "API" },
    ],
  },
  {
    number: "03",
    title: "Database",
    description: "Working with structured and scalable data storage.",
    skills: [
      { name: "MongoDB", short: "DB" },
      { name: "Mongoose", short: "MG" },
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Tools I use to build, manage and deploy projects.",
    skills: [
      { name: "Git", short: "GIT" },
      { name: "GitHub", short: "GH" },
      { name: "VS Code", short: "VS" },
      { name: "Vercel", short: "VC" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 px-6 py-28 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            02 — Skills
          </p>

          <h2 className="font-[Space_Grotesk] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tools I use to turn
            <span className="text-zinc-500"> ideas into products.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
            A collection of technologies and tools I use to design, develop,
            manage, and deploy modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.number}
              className="group rounded-3xl border border-white/10 bg-white/0.02 p-7 transition-all duration-300 hover:border-white/20 hover:bg-white/0.04 sm:p-8"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs tracking-[0.2em] text-zinc-600">
                    {category.number}
                  </span>

                  <h3 className="mt-3 font-[Space_Grotesk] text-2xl font-medium text-white">
                    {category.title}
                  </h3>
                </div>

                <span className="text-zinc-700 transition-colors duration-300 group-hover:text-zinc-400">
                  ↗
                </span>
              </div>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
                {category.description}
              </p>

              {/* Skills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-3 py-2 transition-all duration-200 hover:border-white/20 hover:bg-white/0.06"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/0.06 font-[Space_Grotesk] text-[9px] font-semibold text-zinc-400">
                      {skill.short}
                    </span>

                    <span className="text-xs text-zinc-400 transition-colors group-hover/skill:text-zinc-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/0.02 p-8 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Always learning
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                Technology keeps evolving, and so do I. I'm continuously
                exploring new tools and better ways to build modern web
                experiences.
              </p>
            </div>

            <span className="shrink-0 font-[Space_Grotesk] text-4xl text-zinc-800">
              04
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;