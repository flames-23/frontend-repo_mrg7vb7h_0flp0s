import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const TAGLINE = 'Designing scalable solutions in the Azure Cloud.'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(TAGLINE.slice(0, i))
      i++
      if (i > TAGLINE.length) clearInterval(interval)
    }, 35)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100/60 to-white dark:from-slate-900 dark:to-slate-950" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Mohan Appikatla
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-lg sm:text-xl font-medium text-sky-700 dark:text-sky-300"
          >
            Cloud Enthusiast | Azure Cloud Intern | Aspiring Cloud Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 text-xl text-sky-800 dark:text-sky-200"
            aria-live="polite"
          >
            <span className="whitespace-pre">{displayed}</span>
            <span className="ml-1 inline-block h-6 w-[2px] align-middle bg-sky-700 dark:bg-sky-300 animate-pulse" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl"
          >
            Passionate about cloud infrastructure and automation. Currently interning at PCS Solution, Pune — working on Azure deployments, resource management, and networking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="/resume.pdf" download className="inline-flex items-center justify-center rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 font-semibold shadow-lg shadow-sky-600/30 transition">
              View Resume
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 px-5 py-3 font-semibold shadow-sm transition">
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] md:h-[520px]">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* No images used intentionally */}
        </div>
      </div>
    </section>
  )
}
