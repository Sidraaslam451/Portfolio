import { useState } from "react";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      short: "Understanding your idea",
      description:
        "We start by understanding your business, goals, target audience, and what you actually need from the website or application.",
    },
    {
      number: "02",
      title: "Plan",
      short: "Creating the direction",
      description:
        "I organize the requirements, define the project structure, choose the right technologies, and create a clear development direction.",
    },
    {
      number: "03",
      title: "Design",
      short: "Shaping the experience",
      description:
        "The visual structure, layout, responsive behavior, and overall user experience are shaped before moving into development.",
    },
    {
      number: "04",
      title: "Develop",
      short: "Turning ideas into code",
      description:
        "I build the actual website or application using modern development practices with a focus on clean code, responsiveness, and functionality.",
    },
    {
      number: "05",
      title: "Test",
      short: "Making everything reliable",
      description:
        "The project is tested across different screen sizes and important interactions are checked to make sure everything works as expected.",
    },
    {
      number: "06",
      title: "Launch",
      short: "Taking it live",
      description:
        "After final checks and approval, the project is deployed and made ready for real users.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];

  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-cream/[0.06] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-180px] top-1/4 h-[500px] w-[500px] rounded-full bg-dusty/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-dusty/70" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-mauve">
                07. Process
              </p>
            </div>

            <h2 className="font-[Space_Grotesk] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-cream sm:text-5xl lg:text-6xl">
              From idea
              <span className="block text-mauve">
                to launch.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-mauve sm:text-base">
            A simple and transparent workflow designed to keep the project
            organized, communication clear, and development focused from
            beginning to launch.
          </p>
        </div>

        {/* Process timeline */}
        <div className="mt-12 md:mt-16">
          {/* Desktop timeline */}
          <div className="relative hidden lg:block">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-7 h-px bg-cream/[0.07]" />

            <div
              className="absolute left-0 top-7 h-px bg-dusty/60 transition-all duration-500"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />

            <div className="relative grid grid-cols-6">
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isCompleted = index <= activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="group text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <span
                        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 ${
                          isActive
                            ? "border-dusty/60 bg-dusty/10 text-cream shadow-[0_0_30px_rgba(201,173,167,0.15)]"
                            : isCompleted
                              ? "border-dusty/30 bg-dusty/[0.06] text-dusty/70"
                              : "border-cream/[0.09] bg-ink text-mauve group-hover:border-cream/[0.18] group-hover:text-cream/70"
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    <div className="mt-6 pr-5">
                      <p
                        className={`font-[Space_Grotesk] text-base font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-cream"
                            : "text-mauve group-hover:text-cream/85"
                        }`}
                      >
                        {step.title}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-mauve">
                        {step.short}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="grid gap-3 lg:hidden">
            {steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-dusty/20 bg-dusty/[0.045]"
                      : "border-cream/[0.06] bg-cream/[0.015]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-xs font-semibold ${
                        isActive
                          ? "border-dusty/30 bg-dusty/10 text-cream"
                          : "border-cream/[0.08] text-mauve"
                      }`}
                    >
                      {step.number}
                    </span>

                    <div>
                      <h3
                        className={`font-[Space_Grotesk] text-lg font-semibold ${
                          isActive ? "text-cream" : "text-mauve"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="mt-1 text-xs text-mauve">
                        {step.short}
                      </p>
                    </div>

                    <span className="ml-auto text-mauve">
                      {isActive ? "−" : "+"}
                    </span>
                  </div>

                  {isActive && (
                    <p className="mt-5 border-t border-cream/[0.06] pt-5 text-sm leading-7 text-mauve">
                      {step.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active step detail */}
          <div className="premium-card mt-10 p-7 sm:p-9 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[160px_1fr] lg:items-center">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-dusty/80">
                  Current step
                </span>

                <p className="mt-3 font-[Space_Grotesk] text-6xl font-semibold tracking-[-0.05em] text-cream">
                  {currentStep.number}
                </p>
              </div>

              <div className="border-l-0 lg:border-l lg:border-cream/[0.06] lg:pl-10">
                <h3 className="font-[Space_Grotesk] text-2xl font-semibold text-cream sm:text-3xl">
                  {currentStep.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-dusty/70">
                  {currentStep.short}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-mauve">
                  {currentStep.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-cream/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-mauve">
            Clear communication · Clean development · Reliable results
          </p>

          <span className="text-xs text-mauve">
            Click a step to explore
          </span>
        </div>
      </div>
    </section>
  );
}

export default Process;