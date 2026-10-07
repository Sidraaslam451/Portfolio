import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaCode,
} from "react-icons/fa";

function GitHub() {
  const stats = [
    {
      value: "5+",
      label: "Projects",
      icon: <FaCode />,
    },
    {
      value: "20+",
      label: "Components",
      icon: <FaCodeBranch />,
    },
    {
      value: "Open",
      label: "To Collaborate",
      icon: <FaStar />,
    },
  ];

  return (
    <section
      id="github"
      className="relative overflow-hidden border-t border-cream/[0.06] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-dusty/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-dusty/70" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mauve">
                05. GitHub
              </p>
            </div>

            <h2 className="font-[Space_Grotesk] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
              Code behind
              <span className="block text-mauve">
                the work.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-mauve sm:text-base">
            Explore my GitHub profile to see the projects, experiments, and
            development work behind the products I build.
          </p>
        </div>

        {/* GitHub showcase */}
        <div className="mt-12 md:mt-16 overflow-hidden rounded-3xl border border-cream/[0.07] bg-cream/[0.018]">
          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            {/* Profile */}
            <div className="relative p-7 sm:p-9 lg:p-11">
              {/* Background icon */}
              <FaGithub className="pointer-events-none absolute -right-8 -top-8 text-[190px] text-cream/[0.025]" />

              <div className="relative">
                {/* Profile top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dusty/20 bg-dusty/[0.07] text-3xl text-dusty shadow-[0_0_35px_rgba(201,173,167,0.08)]">
                    <FaGithub />
                  </div>

                  <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.035] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-400/60">
                    Active
                  </span>
                </div>

                {/* Profile info */}
                <div className="mt-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mauve">
                    GitHub Profile
                  </p>

                  <h3 className="mt-3 font-[Space_Grotesk] text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                    @Sidraaslam451
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-mauve">
                    MERN Stack Developer building responsive websites,
                    full-stack applications, and modern digital products.
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="https://github.com/Sidraaslam451"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-dusty px-6 py-3 text-xs font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
                >
                  Visit GitHub
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="border-t border-cream/[0.06] lg:border-l lg:border-t-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group flex items-center justify-between border-b border-cream/[0.06] p-7 last:border-b-0 sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cream/[0.07] bg-cream/[0.025] text-sm text-mauve transition-colors duration-300 group-hover:border-dusty/20 group-hover:text-dusty">
                      {stat.icon}
                    </span>

                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-mauve">
                      {stat.label}
                    </span>
                  </div>

                  <span className="font-[Space_Grotesk] text-2xl font-semibold text-cream/85">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-cream/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-mauve">
            Code · Build · Share
          </p>

          <a
            href="https://github.com/Sidraaslam451"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-mauve transition-colors duration-300 hover:text-cream"
          >
            Explore my repositories
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default GitHub;