const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional, responsive websites that help businesses build a strong online presence and make it easier for customers to connect.",
    features: ["Responsive Design", "Modern UI", "Contact Integration"],
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Clean and conversion-focused landing pages designed to present your product, service, or personal brand clearly.",
    features: ["Modern Layout", "Mobile Friendly", "Fast Performance"],
  },
  {
    number: "03",
    title: "MERN Applications",
    description:
      "Scalable full-stack web applications built with modern technologies and structured around real business requirements.",
    features: ["React", "Node.js", "MongoDB"],
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "Transforming outdated websites into modern, responsive, and user-friendly experiences that better represent your brand.",
    features: ["UI Improvement", "Responsive Design", "Modern Technology"],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="border-t border-zinc-800 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              04 — Services
            </p>

            <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-white md:text-6xl">
              What I can
              <br />
              <span className="text-zinc-500">build for you.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-zinc-400 md:justify-self-end md:text-lg">
            From simple business websites to complete full-stack applications,
            I focus on creating digital products that are responsive,
            functional, and easy to use.
          </p>

        </div>

        {/* Services */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-2">

          {services.map((service) => (
            <article
              key={service.number}
              className="group bg-zinc-950 p-7 transition-all duration-300 hover:bg-zinc-900 md:p-10"
            >

              {/* Number */}
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm text-zinc-600">
                  {service.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 text-sm text-zinc-500 transition-all duration-300 group-hover:border-zinc-500 group-hover:text-white">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white md:text-3xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400 md:text-base">
                {service.description}
              </p>

              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {feature}
                  </span>
                ))}
              </div>

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col justify-between gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 md:flex-row md:items-center md:p-10">

          <div>
            <p className="text-lg font-medium text-white">
              Have a project in mind?
            </p>

            <p className="mt-1 text-sm text-zinc-500">
              Let's discuss your idea and turn it into something useful.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-transform duration-300 hover:scale-105"
          >
            Let's Talk
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;