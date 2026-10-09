import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage blocked, ignore */
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/15 text-sm text-cream/80 transition-colors duration-200 hover:border-dusty/50 hover:bg-cream/10 hover:text-cream"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;