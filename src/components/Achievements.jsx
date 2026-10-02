const achievements = [
  {
    number: "01",
    title: "Hackathon Participation",
    category: "Competition",
    description:
      "Participated in a development hackathon, collaborating on a project and applying technical skills under time constraints.",
    year: "Add Year",
  },
  {
    number: "02",
    title: "Technical Learning",
    category: "Professional Growth",
    description:
      "Continuously expanding my knowledge of web development through hands-on projects and exploring modern technologies.",
    year: "Ongoing",
  },
  {
    number: "03",
    title: "Development Projects",
    category: "Practical Experience",
    description:
      "Building practical web development projects to strengthen problem-solving skills and create real-world digital experiences.",
    year: "Ongoing",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-zinc-800 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            07 — Achievements
          </p>

          <h2 className="font-['Space_Grotesk'] text-4xl font-bold text-white md:text-6xl">
            Progress worth
            <br />
            <span className="text-zinc-500">celebrating.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-400 md:text-lg">
            Every project, challenge, and learning experience contributes
            to my growth as a developer.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <article
              key={item.number}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm text-zinc-600">
                  {item.number}
                </span>

                <span className="text-xl text-zinc-600 transition-colors group-hover:text-white">
                  ✦
                </span>
              </div>

              <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                {item.category}
              </p>

              <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>

              <div className="mt-8 border-t border-zinc-800 pt-5">
                <span className="text-xs text-zinc-500">
                  {item.year}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;