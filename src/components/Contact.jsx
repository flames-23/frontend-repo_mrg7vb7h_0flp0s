import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Contact</motion.h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <motion.form initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500" placeholder="Tell me about your project or opportunity..." />
            </div>
            <button className="mt-5 inline-flex items-center justify-center rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 font-semibold shadow-lg shadow-sky-600/30 transition">Send Message</button>
          </motion.form>

          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6">
            <p className="text-slate-700 dark:text-slate-300">Connect with me on:</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur hover:bg-white/80 dark:hover:bg-white/10 transition">
                <Github size={16}/> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur hover:bg-white/80 dark:hover:bg-white/10 transition">
                <Linkedin size={16}/> LinkedIn
              </a>
              <a href="mailto:someone@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur hover:bg-white/80 dark:hover:bg-white/10 transition">
                <Mail size={16}/> Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
