const projectTypes = [
  "Business Website",
  "Landing Page",
  "MERN Application",
  "Website Redesign",
  "Other",
];

const budgets = [
  "$100 — $300",
  "$300 — $500",
  "$500 — $1000",
  "$1000+",
  "Let's Discuss",
];

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-800 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            08 — Contact
          </p>

          <h2 className="font-['Space_Grotesk'] text-4xl font-bold tracking-tight text-white md:text-6xl">
            Have an idea?
            <br />
            <span className="text-zinc-500">Let's build it.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Tell me a little about your project, and I'll get back to you
            with the next steps.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left Side */}
          <div className="flex flex-col justify-between">

            <div>
              <p className="text-sm leading-6 text-zinc-400">
                Whether you need a business website, landing page, or a
                complete web application, I'm open to discussing your idea.
              </p>

              <div className="mt-10 space-y-5">

                <a
                  href="mailto:aslamsidra876@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-colors group-hover:border-zinc-500 group-hover:text-white">
                    @
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-600">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      aslamsidra876@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-400">
                    ↗
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-600">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-sm font-medium text-white">
                Available for freelance work
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Currently open to new projects and collaboration opportunities.
              </p>
            </div>

          </div>

          {/* Form */}
          <form className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 md:p-8">

            <div className="grid gap-6 md:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-500"
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  Project Type
                </label>

                <select
                  id="project"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 outline-none focus:border-zinc-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  Budget
                </label>

                <select
                  id="budget"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 outline-none focus:border-zinc-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select budget
                  </option>

                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-zinc-400"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Tell me about your idea, requirements, timeline..."
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-500"
                />
              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-transform duration-300 hover:scale-[1.01]"
            >
              Send Project Inquiry
              <span>↗</span>
            </button>

            <p className="mt-4 text-center text-xs text-zinc-600">
              I'll review your message and get back to you as soon as possible.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;