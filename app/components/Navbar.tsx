import Link from 'next/link';
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-[var(--desk)]/90 backdrop-blur-sm border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-black hover:opacity-70 transition">
          Trinity Lea Penafuerte Weevie
        </Link>

        <div className="flex items-center gap-4">
          <ul className="flex gap-6 text-sm">
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/resume">Resume</Link></li>
          </ul>
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