import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-sky-50 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Education</motion.h2>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6">
          <div className="text-lg font-semibold text-slate-900 dark:text-white">B.Tech Graduate</div>
          <p className="mt-2 text-slate-700 dark:text-slate-300">Focused on Computer Science and Cloud Technologies.</p>
        </motion.div>
      </div>
    </section>
  )
}
