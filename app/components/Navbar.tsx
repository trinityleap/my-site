import Link from 'next/link';
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-[var(--floor,#3a1f0f)] backdrop-blur-sm border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white hover:opacity-70 transition">
          Trinity Lea Penafuerte Weevie
        </Link>

        <div className="flex items-center gap-4">
          <a href="https://github.com/trinityleap" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com/in/trinityleap" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="mailto:trinitylea@berkeley.edu" className="hover:text-white transition">Email</a>

          <ThemeToggle />
        </div>
        {/* <ul className="flex gap-6 text-sm">
          <li><Link href="/projects" className="hover:opacity-70 transition">Projects</Link></li>
          <li><Link href="/about" className="hover:opacity-70 transition">About</Link></li>
          <li><Link href="/resume" className="hover:opacity-70 transition">Resume</Link></li>
        </ul> */}
      </div>
    </nav>
  );
}