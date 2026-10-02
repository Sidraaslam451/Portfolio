import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="font-[Space_Grotesk] text-xl font-bold tracking-tight text-white"
        >
          Sidra<span className="text-zinc-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition-all duration-200 hover:bg-zinc-200"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-200 transition-colors hover:bg-white/10 md:hidden"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-px w-5 bg-current transition-transform duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-5 bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-5 bg-current transition-transform duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`border-t border-white/10 bg-zinc-950 transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="border-b border-white/5 py-4 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-5 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;