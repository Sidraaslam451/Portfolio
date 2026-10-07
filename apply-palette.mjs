// Usage (from project root):  node apply-palette.mjs
// Optional: node apply-palette.mjs path/to/src
//
// Hero.jsx and WhatsAppButton.jsx are NOT touched.

import fs from "node:fs";
import path from "node:path";

const SRC = process.argv[2] || "src";

const FILES = [
  "App.jsx",
  "components/Navbar.jsx",
  "components/About.jsx",
  "components/Skills.jsx",
  "components/Projects.jsx",
  "components/GitHub.jsx",
  "components/Services.jsx",
  "components/Process.jsx",
  "components/Experience.jsx",
  "components/Achievements.jsx",
  "components/Contact.jsx",
  "components/Footer.jsx",
];

const NOT_PART = "(?<![\\w:-])";

const structural = [
  // App
  ["bg-zinc-950 text-zinc-100", "bg-ink text-cream"],

  // Section padding
  [
    "px-6 py-24 md:px-10 lg:py-32",
    "px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32",
  ],
  [
    "border-t border-zinc-800 px-6 py-24 md:px-10 md:py-32",
    "border-t border-white/[0.06] px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:py-32",
  ],
  [
    "px-6 pb-8 pt-20 md:px-10 lg:pt-24",
    "px-5 pb-8 pt-16 sm:px-6 md:px-10 md:pt-20 lg:pt-24",
  ],

  // Gap between heading and content
  [new RegExp(`${NOT_PART}mt-16(?![\\w-])`, "g"), "mt-12 md:mt-16"],
  [new RegExp(`${NOT_PART}mb-16(?![\\w-])`, "g"), "mb-12 md:mb-16"],

  // Tall cards: smaller min-height on phones
  [new RegExp(`${NOT_PART}min-h-\\[440px\\]`, "g"), "min-h-[400px] sm:min-h-[440px]"],
  [new RegExp(`${NOT_PART}min-h-\\[300px\\]`, "g"), "min-h-[260px] sm:min-h-[300px]"],
  [new RegExp(`${NOT_PART}min-h-\\[280px\\]`, "g"), "min-h-[240px] sm:min-h-[280px]"],

  // Process: accordion on tablets
  ["relative hidden md:block", "relative hidden lg:block"],
  ["grid gap-3 md:hidden", "grid gap-3 lg:hidden"],

  // Footer
  [
    "mt-20 overflow-hidden border-y border-white/[0.06] py-8",
    "mt-14 overflow-hidden border-y border-white/[0.06] py-8 md:mt-20",
  ],
  ["text-[clamp(2.5rem,8vw,7rem)]", "text-[clamp(1.125rem,5vw,7rem)]"],

  // Navbar: burger menu below lg
  ["justify-between px-6 lg:px-8", "justify-between px-5 sm:px-6 lg:px-8"],
  ["hidden items-center gap-8 md:flex", "hidden items-center gap-5 lg:flex xl:gap-8"],
  ["hover:bg-white/10 md:hidden", "hover:bg-white/10 lg:hidden"],
  ["transition-all duration-300 md:hidden", "transition-all duration-300 lg:hidden"],
  ["max-h-[calc(100vh-80px)]", "max-h-[calc(100dvh-80px)]"],
  ["mx-auto max-w-7xl px-6 py-5", "mx-auto max-w-7xl px-5 py-5 sm:px-6"],

  // Section numbering (must match page order)
  ["03 — Projects", "04. Projects"],
  ["07. GitHub", "05. GitHub"],
  ["05. Services", "06. Services"],
  ["06. Process", "07. Process"],

  // Projects: same heading style as other sections
  [
    /<p className="mb-4 text-sm font-medium uppercase tracking-\[0\.2em\] text-zinc-500">\s*04\. Projects\s*<\/p>/,
    `<div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400/70" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              04. Projects
            </p>
          </div>`,
  ],
  [
    "text-4xl font-bold tracking-tight text-white md:text-6xl",
    "text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl",
  ],
  [
    "mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg",
    "mt-6 max-w-2xl text-sm leading-8 text-zinc-500 sm:text-base",
  ],
  ["border-zinc-800 bg-zinc-900/40", "border-white/[0.07] bg-white/[0.025]"],
  ["bg-black/20", "bg-ink/50"],
  ["placeholder:text-zinc-700", "placeholder:text-mauve/60"],

  // rgba glows/shadows
  [/rgba\(139,\s*92,\s*246/g, "rgba(201,173,167"],
  [/rgba\(167,\s*139,\s*250/g, "rgba(201,173,167"],
];

const colorRe =
  /(?<![\w-])(text|bg|border|from|to|via|ring|divide|decoration|outline)-(zinc|violet|white)(?:-(\d{2,3}))?(\/(?:\[[\d.]+\]|\d+))?(?![\w-])/g;

function mapColor(kind, color, shade, suffix = "") {
  if (color === "white") {
    if (suffix) return `${kind}-cream${suffix}`;
    return kind === "bg" ? "bg-dusty" : `${kind}-cream`;
  }

  if (color === "violet") {
    const base = shade === "200" ? "cream" : "dusty";
    const s = kind === "text" && suffix === "/60" ? "/80" : suffix;
    return `${kind}-${base}${s}`;
  }

  const n = Number(shade);

  if (kind === "text") {
    if (n >= 950) return "text-ink";
    if (n <= 200) return "text-cream";
    if (n === 300) return "text-cream/85";
    if (n === 400) return "text-cream/70";
    return "text-mauve";
  }

  if (kind === "border") {
    if (n >= 800) return "border-cream/10";
    if (n === 700) return "border-cream/15";
    if (n === 600) return "border-dusty/40";
    return "border-mauve";
  }

  if (kind === "bg") {
    if (n >= 950) return `bg-ink${suffix}`;
    if (n >= 800) return suffix ? `bg-dusk${suffix}` : "bg-dusk/30";
    if (n <= 200) return "bg-cream";
    return `bg-mauve${suffix}`;
  }

  return `${kind}-mauve${suffix}`;
}

let changedFiles = 0;

for (const file of FILES) {
  const full = path.join(SRC, file);

  if (!fs.existsSync(full)) {
    console.log(`skip (not found): ${full}`);
    continue;
  }

  const original = fs.readFileSync(full, "utf8");
  let code = original;

  for (const [from, to] of structural) {
    code = code.replace(from, to);
    if (typeof from === "string") code = code.split(from).join(to);
  }

  code = code.replace(colorRe, (_m, kind, color, shade, suffix) =>
    mapColor(kind, color, shade, suffix || "")
  );

  const leftovers = code.match(/\b(?:zinc|violet)-\d{2,3}\b/g);
  if (leftovers) {
    console.log(`  ! ${file}: leftover ${[...new Set(leftovers)].join(", ")}`);
  }

  if (code !== original) {
    fs.writeFileSync(full, code);
    changedFiles++;
    console.log(`updated: ${file}`);
  } else {
    console.log(`no changes: ${file}`);
  }
}

console.log(`\nDone. ${changedFiles} file(s) updated.`);