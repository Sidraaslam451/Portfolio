import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

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

  const whatsappMessage = encodeURIComponent(
    "Assalamualaikum Sidra! I'm interested in your web development services. I'd like to discuss my project."
  );

  const whatsappURL = `https://wa.me/923192845982?text=${whatsappMessage}`;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("https://formspree.io/f/xzeznnav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Thanks for reaching out! Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me on WhatsApp.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-24 md:px-10 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/[0.035] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400/70" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              10. Contact
            </p>
          </div>

          <h2 className="font-[Space_Grotesk] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Have a project
            <span className="block text-zinc-500">
              in mind?
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-500 sm:text-base">
            Tell me a little about your project, what you need, and what
            you're looking to achieve. I'll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Main contact area */}
        <div className="mt-16 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          {/* Left information */}
          <div className="premium-card relative overflow-hidden p-7 sm:p-9">
            <span className="pointer-events-none absolute -right-4 -top-8 select-none font-[Space_Grotesk] text-[150px] font-semibold leading-none text-white/[0.025]">
              10
            </span>

            <div className="relative flex h-full flex-col">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300/60">
                  Let's connect
                </p>

                <h3 className="mt-4 max-w-sm font-[Space_Grotesk] text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Let's build something meaningful together.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
                  Whether you need a business website, landing page, or a
                  complete web application, I'm open to discussing your idea.
                </p>
              </div>

              {/* Contact details */}
              <div className="mt-10 space-y-5 border-t border-white/[0.06] pt-7">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
                    Email
                  </p>

                  <a
                    href="mailto:aslamsidra876@gmail.com"
                    className="mt-2 block text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                  >
                    aslamsidra876@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
                    Location
                  </p>

                  <p className="mt-2 text-sm text-zinc-400">
                    Karachi, Pakistan
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
                    Availability
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>

                    Open to freelance projects
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappURL}
                target="_blank"
                rel="noreferrer"
                className="group mt-auto flex items-center gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.05]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-xl text-[#25D366]">
                  <FaWhatsapp />
                </span>

                <span>
                  <span className="block text-xs font-semibold text-zinc-300">
                    Prefer WhatsApp?
                  </span>

                  <span className="mt-1 block text-[11px] text-zinc-600 transition-colors group-hover:text-zinc-500">
                    Start a conversation directly →
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.018] p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm text-white placeholder:text-zinc-700 outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/[0.025]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm text-white placeholder:text-zinc-700 outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/[0.025]"
                  />
                </div>

                {/* Project type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600"
                  >
                    Project Type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm text-zinc-400 outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/[0.025]"
                  >
                    <option value="" disabled>
                      Select a project
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
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600"
                  >
                    Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm text-zinc-400 outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/[0.025]"
                  >
                    <option value="" disabled>
                      Select a budget
                    </option>

                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  placeholder="Tell me about your project, goals, features, or anything else that might be useful..."
                  className="w-full resize-none rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3.5 text-sm leading-7 text-white placeholder:text-zinc-700 outline-none transition-all duration-300 focus:border-violet-400/30 focus:bg-white/[0.025]"
                />
              </div>

              {/* Status */}
              {status.message && (
                <div
                  className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-400/15 bg-emerald-400/[0.04] text-emerald-300/80"
                      : "border-red-400/15 bg-red-400/[0.04] text-red-300/80"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <div className="mt-6 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] leading-5 text-zinc-700">
                  I'll review your message and get back to you as soon as
                  possible.
                </p>

                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
                >
                  Send Message

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;