function About() {
  const highlights = [
    {
      number: "01",
      title: "Responsive Development",
      description:
        "I create websites that work smoothly across desktops, tablets, and mobile devices.",
    },
    {
      number: "02",
      title: "Modern Technologies",
      description:
        "I work with modern JavaScript technologies to build clean and scalable web experiences.",
    },
    {
      number: "03",
      title: "Client Focused",
      description:
        "I focus on understanding the client's goals and turning ideas into practical digital solutions.",
    },
  ];

  return (
    <section id="about" className="border-t border-white/5 px-6 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              01 — About Me
            </p>

            <h2 className="font-[Space_Grotesk] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Building with purpose,
              <span className="text-zinc-500"> not just code.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-zinc-400 lg:ml-auto">
            I'm Sidra Aslam, a MERN Stack Developer focused on building modern,
            responsive, and user-friendly web experiences. I enjoy turning
            ideas into functional digital products while continuously
            learning and exploring new technologies.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">

          {/* Profile card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/0.02 p-8 sm:p-10">

            {/* Decorative element */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/5" />
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-white/5" />

            <div className="relative">
              <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/0.04">
                <span className="font-[Space_Grotesk] text-2xl font-bold">
                  SA
                </span>
              </div>

              <h3 className="font-[Space_Grotesk] text-2xl font-semibold text-white">
                Sidra Aslam
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                MERN Stack Developer
              </p>

              <div className="mt-8 space-y-4 border-t border-white/5 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    Based in
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    Karachi, Pakistan
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    Focus
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    Web Development & MERN Stack
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    Currently
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    Open to freelance opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-5">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-white/10 bg-white/0.02 p-7 transition-all duration-300 hover:border-white/20 hover:bg-white/0.04 sm:p-8"
              >
                <div className="flex gap-6">
                  <span className="font-[Space_Grotesk] text-sm text-zinc-600 transition-colors duration-300 group-hover:text-zinc-300">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-[Space_Grotesk] text-xl font-medium text-zinc-100">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;