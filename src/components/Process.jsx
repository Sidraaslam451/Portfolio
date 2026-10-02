const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your idea, goals, target audience, and the problem your website or application needs to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I organize the project requirements, features, content, and technical approach before development begins.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "The interface is structured around a clean, modern, and responsive experience that works across different screen sizes.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "I turn the approved concept into a functional website or web application using modern development technologies.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "The project is tested across devices and screen sizes to identify issues and improve usability, responsiveness, and performance.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "After the final checks, the project is deployed and prepared for its real users.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="border-t border-zinc-800 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            05 — Process
          </p>

          <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-white md:text-6xl">
            From idea
            <br />
            <span className="text-zinc-500">to launch.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            A simple and transparent process designed to keep every project
            organized, collaborative, and focused on the final goal.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid border-l border-t border-zinc-800 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="group border-b border-r border-zinc-800 p-7 transition-colors duration-300 hover:bg-zinc-900/50 md:p-9"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-600">
                  {step.number}
                </span>

                <span className="text-zinc-700 transition-colors duration-300 group-hover:text-zinc-400">
                  ↗
                </span>
              </div>

              {/* Content */}
              <div className="mt-16">
                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-400 md:text-base">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 flex flex-col gap-4 border-l-2 border-zinc-700 pl-5">
          <p className="text-lg font-medium text-white">
            Clear communication. Clean development. Reliable results.
          </p>

          <p className="max-w-2xl text-sm leading-6 text-zinc-500">
            Every project is approached with attention to detail and a focus
            on creating something that is useful for the people who will
            actually use it.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Process;