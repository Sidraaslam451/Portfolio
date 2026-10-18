import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 bg-ink/80 text-lg text-cream backdrop-blur-md transition-all duration-300 hover:border-dusty/50 hover:text-dusty sm:bottom-7 sm:left-7 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      ↑
    </a>
  );
}

export default BackToTop;