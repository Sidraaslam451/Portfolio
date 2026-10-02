const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
];

function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-['Space_Grotesk'] text-2xl font-bold text-white"
            >
              Sidra<span className="text-zinc-500">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
              MERN Stack Developer building responsive websites and modern
              web applications for international clients.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-xs text-zinc-500">
                Available for freelance work
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              Connect
            </p>

            <div className="flex flex-col items-start gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {social.name} ↗
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Sidra Aslam. All rights reserved.
          </p>

          <p>
            Designed & built with React.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;