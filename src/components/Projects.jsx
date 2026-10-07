const projects = [
  {
    number: "01",
    title: "SupportFlow",
    image: "/projects/supportflow.png",
    category: "FEMHack 2026 • Full-Stack Project",
    description:
      "An AI-assisted support ticket management system built for FEMHack 2026. Customers can submit tickets while AI suggests the category, priority, and summary. Agents can review, communicate, manage ticket status, and resolve issues through a structured workflow.",
    technologies: [
      "Frontend",
      "Backend",
      "AI Assistant",
      "Live Chat",
      "Role-Based Access",
    ],
    link: "https://femhack-2026-m1z4.vercel.app/",
    github: "https://github.com/Sidraaslam451/FEMHACK-2026",
  },
  {
    number: "02",
    title: "Interview IQ",
    image: "/projects/interviewiq.png",
    category: "AI-Powered Interview Platform",
    description:
      "A production-ready AI-powered interview platform designed for anyone preparing for interviews. The application combines a full-stack backend with AI-based interview evaluation and automated email workflows using n8n, delivering an end-to-end interview practice experience.",
    technologies: [
      "Frontend",
      "Backend",
      "AI Evaluation",
      "n8n Automation",
      "Email Workflows",
      "Production Deployment",
    ],
    link: "https://interview-iq-ai-app-n9wy.vercel.app/",
    github: "https://github.com/Sidraaslam451/InterviewIQ-AI-app",
  },
  {
  number: "03",
  title: "University Portal",
  image: "/projects/university-portal.png",
  category: "Frontend Web Development",
  description:
    "A responsive university portal website built with HTML, CSS, and JavaScript. The project focuses on creating a clean and accessible interface for presenting university information, academic resources, and essential student-focused content.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
  ],
  link: "https://university-portal-fawn.vercel.app/",
  github: "https://github.com/Sidraaslam451/University-Portal",
},
{
  number: "04",
  title: "Multi-Vendor E-Commerce",
  image: "/projects/multivendor-ecommerce.png",
  category: "Frontend Web Development",
  description:
    "A responsive multi-vendor e-commerce website built with HTML, CSS, and JavaScript. The project focuses on creating a structured online shopping experience with product browsing, vendor-focused content, and interactive frontend functionality.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
  ],
  link: "https://task-2-of-internship.vercel.app/",
  github: "https://github.com/Sidraaslam451/Task-2-of-internship",
},
];

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-cream/[0.06] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-dusty/70" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mauve">
              04. Projects
            </p>
          </div>

          <h2 className="font-['Space_Grotesk'] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
            Selected work,
            <br />
            <span className="text-mauve">built with purpose.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-mauve sm:text-base">
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
              className={`group overflow-hidden rounded-2xl border border-cream/[0.07] bg-cream/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-dusty/40 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >

              {/* Project Visual */}
              <div
                className={`relative overflow-hidden bg-dusk/30 ${
                  index === 0 ? "h-72 md:h-96" : "h-64"
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">

                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-mauve">
                    {project.category}
                  </span>

                  <span className="text-sm text-mauve">
                    {project.number}
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-cream md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-cream/70 md:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cream/15 bg-ink px-3 py-1.5 text-xs text-cream/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex gap-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-cream transition-colors hover:text-cream/70"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-cream/70 transition-colors hover:text-cream"
                  >
                    GitHub ↗
                  </a>
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