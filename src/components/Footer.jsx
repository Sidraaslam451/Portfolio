import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navigation = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Journey", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Sidraaslam451",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sidra-aslam-755765313",
      icon: <FaLinkedin />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sidra.webdev/",
      icon: <FaInstagram />,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@creativeanimation-p7j",
      icon: <FaYoutube />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1Sdw4uUGxA/",
      icon: <FaFacebook />,
    },
    {
      name: "X",
      href: "https://x.com/SidraAslams4s",
      icon: <FaXTwitter />,
    },
    {
      name: "WhatsApp",
      href: "https://whatsapp.com/channel/0029VbDmwuDL7UVLw2TCiE03",
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] px-6 pb-8 pt-20 md:px-10 lg:pt-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-violet-500/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr_0.8fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block font-[Space_Grotesk] text-3xl font-semibold tracking-[-0.04em] text-white transition-colors duration-300 hover:text-violet-200"
            >
              Sidra<span className="text-violet-400">.</span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
              MERN Stack Developer building responsive websites and modern
              web applications for international clients.
            </p>

            {/* Availability */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Available for freelance work
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-700">
              Navigation
            </p>

            <nav className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-3" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-700">
              Connect
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02] text-sm text-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.06] hover:text-violet-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a
              href="mailto:aslamsidra876@gmail.com"
              className="mt-6 inline-block text-xs text-zinc-600 transition-colors duration-300 hover:text-white"
            >
              aslamsidra876@gmail.com
            </a>
          </div>
        </div>

        {/* Large brand statement */}
        <div className="mt-20 overflow-hidden border-y border-white/[0.06] py-8">
          <p className="select-none text-center font-[Space_Grotesk] text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-none tracking-[-0.06em] text-white/[0.035]">
            BUILD · CREATE · IMPROVE
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-zinc-700">
            © {new Date().getFullYear()} Sidra Aslam. All rights reserved.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-700 transition-colors duration-300 hover:text-zinc-400"
          >
            Back to top

            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;