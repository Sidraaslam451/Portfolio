function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-500 w-500 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/0.03 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">

        {/* Left Content */}
        <div>
          {/* Availability */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/0.03 px-4 py-2 text-sm text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Available for freelance work
          </div>

          {/* Small intro */}
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Hello, I'm
          </p>

          {/* Main heading */}
          <h1 className="max-w-4xl font-[Space_Grotesk] text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Sidra
            <span className="text-zinc-500"> Aslam</span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 font-[Space_Grotesk] text-2xl font-medium text-zinc-300 sm:text-3xl">
            MERN Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build high-level responsive websites and modern web
            applications for international clients.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
            >
              View My Work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/0.03 px-6 py-3.5 text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
            >
              Let's Work Together
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Find me
            </span>

            <a
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-107.5">

            {/* Outer rings */}
            <div className="absolute inset-0 rounded-full border border-white/0.06" />
            <div className="absolute inset-8 rounded-full border border-white/0.06" />
            <div className="absolute inset-16 rounded-full border border-white/0.06" />

            {/* Center */}
            <div className="absolute inset-24 flex items-center justify-center rounded-full border border-white/10 bg-white/0.03 backdrop-blur-sm">
              <div className="text-center">
                <p className="font-[Space_Grotesk] text-5xl font-bold text-white">
                  SA
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Developer
                </p>
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute right-0 top-20 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2 text-xs text-zinc-400 backdrop-blur-md">
              React
            </div>

            <div className="absolute bottom-20 left-0 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2 text-xs text-zinc-400 backdrop-blur-md">
              Node.js
            </div>

            <div className="absolute bottom-4 right-20 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2 text-xs text-zinc-400 backdrop-blur-md">
              MongoDB
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-zinc-600 transition-colors hover:text-zinc-300 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="h-10 w-px bg-linear-to-b from-zinc-600 to-transparent" />
      </a>
    </section>
  );
}

export default Hero;