const experiences = [
  {
    number: "01",
    period: "2024 — Present",
    role: "Freelance Web Developer",
    company: "Independent",
    description:
      "Building responsive websites and modern web applications for clients, while working with different requirements, technologies, and project ideas.",
    skills: ["Web Development", "React", "MERN Stack"],
  },
  {
    number: "02",
    period: "2024 — Present",
    role: "Web Development Learning & Projects",
    company: "Personal & Academic Projects",
    description:
      "Continuously improving my development skills by building projects, exploring new technologies, and working with modern frontend and backend tools.",
    skills: ["JavaScript", "Node.js", "MongoDB"],
  },
  {
    number: "03",
    period: "Experience",
    role: "Teaching Experience",
    company: "Eemaan Academy",
    description:
      "Teaching and supporting students while developing communication, explanation, and problem-solving skills alongside my technical journey.",
    skills: ["Teaching", "Communication", "Problem Solving"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-800 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              06 — Journey
            </p>

            <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-white md:text-6xl">
              My journey,
              <br />
              <span className="text-zinc-500">so far.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-zinc-400 md:justify-self-end md:text-lg">
            A growing journey shaped by development, learning, teaching,
            projects, and continuous exploration of technology.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-11px top-0 hidden h-full w-px bg-zinc-800 md:block" />

          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition-all duration-300 hover:border-zinc-600 md:ml-10 md:p-9"
              >

                {/* Timeline Dot */}
                <div className="absolute -left-51px top-10 hidden h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 md:flex">
                  <div className="h-2 w-2 rounded-full bg-zinc-500 transition-colors duration-300 group-hover:bg-white" />
                </div>

                {/* Top Row */}
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                      {experience.period}
                    </p>

                    <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold text-white md:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {experience.company}
                    </p>
                  </div>

                  <span className="text-sm text-zinc-700">
                    {experience.number}
                  </span>

                </div>

                {/* Description */}
                <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
                  {experience.description}
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;