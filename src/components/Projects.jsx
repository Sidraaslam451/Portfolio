const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    category: "Full Stack Web Application",
    description:
      "A modern e-commerce platform with a responsive interface, product management, authentication, and a scalable backend.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    number: "02",
    title: "Business Website",
    category: "Web Design & Development",
    description:
      "A professional business website designed to create a strong online presence and make it easy for customers to connect.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    number: "03",
    title: "Dashboard Application",
    category: "MERN Stack",
    description:
      "A clean and responsive dashboard interface with structured data views and modern application architecture.",
    technologies: ["React", "Express.js", "MongoDB"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-800 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            03 — Projects
          </p>

          <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-white md:text-6xl">
            Selected work,
            <br />
            <span className="text-zinc-500">built with purpose.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            A selection of web applications and websites focused on
            performance, responsiveness, clean design, and real-world
            usability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-600 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Project Visual */}
              <div
                className={`relative overflow-hidden bg-linear-to-br from-zinc-800 via-zinc-900 to-zinc-950 ${
                  index === 0 ? "h-72 md:h-96" : "h-64"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="mb-3 block text-5xl font-bold text-zinc-700">
                      {project.number}
                    </span>

                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                      Project Preview
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-zinc-700/40" />
                <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full border border-zinc-700/30" />
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">

                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                    {project.category}
                  </span>

                  <span className="text-sm text-zinc-600">
                    {project.number}
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 md:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex gap-6">
                  <button className="text-sm font-medium text-white transition-colors hover:text-zinc-400">
                    Live Demo ↗
                  </button>

                  <button className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
                    GitHub ↗
                  </button>
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;