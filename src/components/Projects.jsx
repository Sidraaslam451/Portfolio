import { useState } from "react";
import { FaGithub } from "react-icons/fa";

/* ------------------------------------------------------------------
   ADD A NEW PROJECT: copy one { ... }, block, paste it at the end of
   this list and fill in your details.

   - category: use the same spelling every time (e.g. "Full-Stack",
     "Frontend"). A filter button is created for each category.
   - link / github: optional. Leave one out and its button is hidden.
   - numbers (01, 02...) are added automatically.
------------------------------------------------------------------ */

const projects = [
  {
    title: "SupportFlow",
    category: "Full-Stack",
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
    title: "Interview IQ",
    category: "Full-Stack",
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
    title: "University Portal",
    category: "Frontend",
    description:
      "A responsive university portal website built with HTML, CSS, and JavaScript. The project focuses on creating a clean and accessible interface for presenting university information, academic resources, and essential student-focused content.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://university-portal-fawn.vercel.app/",
    github: "https://github.com/Sidraaslam451/University-Portal",
  },
  {
    title: "Multi-Vendor E-Commerce",
    category: "Frontend",
    description:
      "A responsive multi-vendor e-commerce website built with HTML, CSS, and JavaScript. The project focuses on creating a structured online shopping experience with product browsing, vendor-focused content, and interactive frontend functionality.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://task-2-of-internship.vercel.app/",
    github: "https://github.com/Sidraaslam451/Task-2-of-internship",
  },
    {
    title: "Expense Tracker",
    category: "Frontend",
    description:
      "A responsive expense tracking application that helps users record their income and expenses, keep an eye on spending, and understand where their money goes through a clean and simple interface.",
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://expense-tracker-hxlv.vercel.app/",
    github: "https://github.com/Sidraaslam451/Expense-Tracker",
  },
    {
    title: "Advanced Tic-Tac-Toe",
    category: "Frontend",
    description:
      "An interactive tic-tac-toe game built as a web app, with clean game logic, win detection, and a responsive interface that works smoothly on both desktop and mobile.",
    technologies: ["React", "JavaScript", "Responsive Design"],
    link: "https://tic-tac-toe-uakr.vercel.app/",
    github: "https://github.com/Sidraaslam451/Tic-Tac-Toe",
  },
    {
    title: "SMIT Connect Portal",
    category: "Full-Stack",
    description:
      "A student portal built for SMIT that brings admissions, course information, and leave management together in one place, giving students a simple and organized way to handle their academic requests online.",
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://smit-connect-portal-kabc.vercel.app/",
    github: "https://github.com/Sidraaslam451/SMIT-connect-portal",
  },
    {
    title: "First Portfolio",
    category: "Frontend",
    description:
      "My first personal portfolio website, built to present my skills, projects, and contact details in a clean and responsive layout. It marks the start of my web development journey and the foundation for the work that followed.",
    technologies: ["React", "Responsive Design"],
    link: "https://frontend-sigma-two-y4o9bgl5z3.vercel.app/",
    github: "https://github.com/Sidraaslam451/Mern-stack-portfolio-website",
  },
    {
    title: "PitchCraft",
    category: "Full-Stack",
    description:
      "An AI-powered startup partner that helps founders turn their ideas into clear, actionable plans. It uses AI-integrated suggestions to guide key decisions, with user accounts and a full-stack architecture behind it.",
    technologies: [
      "Frontend",
      "Backend",
      "AI Integration",
      "Authentication",
    ],
    link: "https://frontend-of-pitch-craft.vercel.app/register",
    github: "https://github.com/Sidraaslam451/PITCH-CRAFT",
  },
    {
    title: "Ramadan Calculator",
    category: "Frontend",
    description:
      "A Ramadan calculator that uses live API data to show accurate Ramadan information, along with a real-time countdown to the next Ramadan. Built as a responsive React app with API integration for up-to-date results.",
    technologies: ["React", "API Integration", "Responsive Design"],
    link: "https://react-ramazan-calculator.vercel.app/",
    github: "https://github.com/Sidraaslam451/React-Ramazan-Calculator",
  },
    {
    title: "BackendCraft",
    category: "Frontend",
    description:
      "A developer blog that explains core backend concepts with clear writing and real code examples. It covers 8 essential topics including JWT authentication, Mongoose, bcrypt, MVC, and Express middlewares, designed for developers learning backend development.",
    technologies: ["HTML5", "CSS3", "Technical Writing", "Responsive Design"],
    link: "https://backend-blogs-three.vercel.app/",
    github: "https://github.com/Sidraaslam451/Backend-Blogs",
  },
    {
    title: "Nexcent Landing Page",
    category: "Frontend",
    description:
      "A complete landing page for a community and business management platform, built during my course's first hackathon where I scored 85%. It includes a hero section, feature highlights, stats, three pricing plans, a blog section, and a fully responsive layout.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://hackathone-umber.vercel.app/",
    github: "https://github.com/Sidraaslam451/FemHackathon",
  },
    {
    title: "Sapphire Landing Page",
    category: "Frontend",
    description:
      "A UI recreation of a modern fashion e-commerce landing page, built as a practice project to sharpen layout and design skills. It features category navigation, a seasonal collection banner, shop-by-category cards, and a newsletter footer, all fully responsive.",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    link: "https://sapphire-website-lime.vercel.app/",
    github: "https://github.com/Sidraaslam451/Sapphire-website",
  },
    {
    title: "MR.CONE Restaurant",
    category: "Landing Page",
    description:
      "A premium landing page for a fine-dining grill restaurant, with a full menu of starters and main courses, chef's recommendations with ratings, a table reservation form, and the restaurant's story and timings. Designed with a rich, elegant look and a fully responsive layout.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://restaurant-home-pg.vercel.app/",
    github: "https://github.com/Sidraaslam451/Restaurant-home-pg",
  },
    {
    title: "Maison de Fleur",
    category: "Frontend",
    description:
      "A luxury botanical boutique website with a rich, animation-driven experience. Smooth scroll reveals, a moving ticker, and hover-to-reveal flower specimens bring the brand to life, alongside a customer reviews section and a custom bouquet request form, all in an elegant lavender theme.",
    technologies: [
      "React",
      "Framer Motion",
      "Animations",
      "Responsive Design",
    ],
    link: "https://botanical-atelier-website.vercel.app/",
    github: "https://github.com/Sidraaslam451/Botanical-Atelier-Website",
  },
    {
    title: "Flower Image Gallery",
    category: "Frontend",
    description:
      "An interactive image gallery of flowers with category filtering, hover effects on every card, and a like button to mark favourites. Built with a clean grid layout that adapts smoothly across desktop and mobile.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://gallery-gamma-two.vercel.app/",
    github: "https://github.com/Sidraaslam451/Image-gallery",
  },
    {
    title: "KFC Homepage Clone",
    category: "Frontend",
    description:
      "A responsive UI clone of a fast-food ordering homepage, built as a practice project. It features delivery and pickup options, menu categories, best sellers, top deals, featured promotions, and multiple linked pages for menus and deals.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://my-kfc-one.vercel.app/",
    github: "https://github.com/Sidraaslam451/KFC-Clone",
  },
    {
    title: "Portfolio v1",
    category: "Frontend",
    description:
      "My earlier personal portfolio, built to present my skills, services, and journey. It features a typing-effect hero, animated skill bars, interactive pop-up modals for services and my learning timeline, and a contact form, all in a responsive layout.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://sidra-s-portfolio-xi.vercel.app/",
    github: "https://github.com/Sidraaslam451/SIDRA-S-PORTFOLIO",
  },
    {
    title: "Yoko's Kitchen",
    category: "Landing Page",
    description:
      "A course assignment: a multi-section website for a Japanese cooking school, with class cards showing price, schedule and available spaces, an instructor story section, and contact details. Built to practise semantic structure and clean, responsive layouts.",
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    link: "https://assignment-1-green-one.vercel.app/",
    github: "https://github.com/Sidraaslam451/Assignment-1",
  },
    {
    title: "JS Calculators Dashboard",
    category: "Frontend",
    description:
      "An interactive dashboard that turns 12 JavaScript math assignments into a hands-on learning experience. Each card shows the question, the logic and the live output, with calculators like a temperature converter, currency converter, age calculator and multiplication table generator. Includes dark/light mode, a progress tracker, toast notifications and a copy-result button.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    link: "https://js-assignment-1-tau.vercel.app/",
    github: "https://github.com/Sidraaslam451/JS-assignment-1",
  },
    {
    title: "JavaScript Output Demo",
    category: "Frontend",
    description:
      "A small JavaScript practice project that shows each exercise as a question, the logic behind it, and its live output in one clean layout.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    link: "https://js-assignment-9to20-chapters.vercel.app/",
    github: "https://github.com/Sidraaslam451/JS-assignment-9to20-chapters",
  },
    {
    title: "JavaScript Logic Showcase",
    category: "Frontend",
    description:
      "A course practice project covering JavaScript conditions, arrays and loops through 40+ exercises. Each one shows the question, the logic and a live output, and many can be run with your own input, like a marks and grade calculator, a simple calculator, a traffic signal checker and a multiplication table generator.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    link: "https://assignment-chapter-11-to-30.vercel.app/",
    github: "https://github.com/Sidraaslam451/Assignment-chapter-11-to-30",
  },
    {
    title: "Password Generator",
    category: "Frontend",
    description:
      "A secure password generator that creates random passwords instantly. Users can choose the length and include lowercase, uppercase, numbers and symbols, copy the result in one click, check its strength, and view a list of recently generated passwords.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    link: "https://password-generator-sigma-tawny.vercel.app/",
    github: "https://github.com/Sidraaslam451/Password_Generator",
  },
    {
    title: "Kababjees Menu Clone",
    category: "Frontend",
    description:
      "A UI clone of a fast-food ordering website, built as a practice project with a focus on layout and long, content-heavy pages. It includes a category navigation grid, popular items, deal sections with add-to-cart buttons, and a responsive footer with app download links.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "https://kababjees-clone-eight.vercel.app/",
    github: "https://github.com/Sidraaslam451/Kababjees-Clone",
  },
    {
    title: "TaskFlow",
    category: "Frontend",
    description:
      "A clean and simple to-do app for managing daily tasks. Users can add tasks, mark them as done, filter by All, Pending or Done, clear completed tasks in one click, and keep a live count of pending work. Tasks are saved in the browser automatically, so nothing is lost on refresh.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    link: "https://to-do-app-seven-azure-66.vercel.app/",
    github: "https://github.com/Sidraaslam451/TO-DO-APP",
  },
  // ---- Template for a new project (copy from here) ----
  // {
  //   title: "Project Name",
  //   category: "Frontend",
  //   description: "One or two sentences about what it does.",
  //   technologies: ["React", "Tailwind CSS"],
  //   link: "https://your-live-demo.vercel.app/",
  //   github: "https://github.com/Sidraaslam451/your-repo",
  // },
];

const INITIAL_COUNT = 6;
const MAX_TAGS = 5;

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  const handleCategory = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-cream/[0.06] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
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

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap items-center gap-2.5 md:mb-10">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "border-dusty bg-dusty text-ink"
                    : "border-cream/15 text-cream/70 hover:border-dusty/50 hover:text-cream"
                }`}
              >
                {category}
              </button>
            );
          })}

          <span className="ml-1 text-xs text-mauve">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => {
            const number = String(projects.indexOf(project) + 1).padStart(2, "0");
            const shownTags = project.technologies.slice(0, MAX_TAGS);
            const extraTags = project.technologies.length - shownTags.length;

            return (
              <article
                key={project.title}
                className="premium-card group flex flex-col p-6 sm:p-7"
              >
                {/* Background number */}
                <span className="pointer-events-none absolute -right-2 -top-6 select-none font-[Space_Grotesk] text-[110px] font-semibold leading-none text-cream/[0.03] transition-colors duration-500 group-hover:text-dusty/[0.07]">
                  {number}
                </span>

                <div className="relative flex flex-1 flex-col">
                  {/* Top row */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-dusty/20 bg-dusty/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-dusty">
                      {project.category}
                    </span>

                    <span className="font-[Space_Grotesk] text-sm text-mauve">
                      {number}
                    </span>
                  </div>

                  {/* Title + description */}
                  <h3 className="mt-5 font-['Space_Grotesk'] text-xl font-semibold tracking-tight text-cream transition-colors duration-300 group-hover:text-dusty sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-4 text-sm leading-7 text-mauve">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {shownTags.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-cream/[0.08] bg-cream/[0.03] px-2.5 py-1.5 text-[11px] font-medium text-cream/70"
                      >
                        {tech}
                      </span>
                    ))}

                    {extraTags > 0 && (
                      <span className="rounded-lg px-2 py-1.5 text-[11px] text-mauve">
                        +{extraTags}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-dusty px-4 py-2.5 text-xs font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
                      >
                        Live Demo
                        <span>↗</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                        className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2.5 text-xs font-medium text-cream/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-dusty/50 hover:text-cream"
                      >
                        <FaGithub className="text-sm" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 h-px w-0 bg-dusty/70 transition-all duration-500 group-hover:w-20 sm:left-7" />
              </article>
            );
          })}
        </div>

        {/* Show more / less */}
        {filtered.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-6 py-3 text-xs font-medium text-cream/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-dusty/50 hover:text-cream"
            >
              {showAll
                ? "Show fewer projects"
                : `Show all ${filtered.length} projects`}

              <span>{showAll ? "↑" : "↓"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;