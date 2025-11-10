import ThemeToggle from './ThemeToggle'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur shadow-lg py-3 px-4">
          <a href="#" className="text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-100">Mohan Appikatla</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
            <a href="#about" className="hover:text-sky-600">About</a>
            <a href="#skills" className="hover:text-sky-600">Skills</a>
            <a href="#projects" className="hover:text-sky-600">Projects</a>
            <a href="#experience" className="hover:text-sky-600">Experience</a>
            <a href="#education" className="hover:text-sky-600">Education</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><Linkedin size={18} /></a>
            <a href="mailto:someone@example.com" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><Mail size={18} /></a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
