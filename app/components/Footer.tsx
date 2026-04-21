export default function Footer() {
  return (
    <footer className="w-full bg-[var(--floor,#3a1f0f)] text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        {/* <p>Trinity</p> */}
        <div className="flex gap-4">
          <a href="https://github.com/trinityleap" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com/in/trinityleap" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="mailto:trinitylea@berkeley.edu" className="hover:text-white transition">Email</a>
        </div>
      </div>
    </footer>
  );
}