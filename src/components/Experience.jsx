import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Experience</motion.h2>
        <div className="mt-8 grid gap-6">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-lg font-semibold text-slate-900 dark:text-white">Azure Cloud Intern – PCS Solution, Pune</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">June 2025 – Present</div>
            </div>
            <ul className="mt-3 list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
              <li>Working on real-world Azure deployments and cloud infrastructure automation.</li>
              <li>Managing resource groups, storage, and monitoring through Azure Portal and CLI.</li>
              <li>Collaborating on DevOps pipeline setup.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
