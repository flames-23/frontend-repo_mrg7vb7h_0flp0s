import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const profileSrc = '/profile.jpg' // replace with uploaded image path in public/
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="pt-24">
        <Hero profileSrc={profileSrc} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <footer className="py-10 text-center text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Mohan Appikatla. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
