import { motion } from 'framer-motion'
import { Cloud, Code2, Wrench, Shield } from 'lucide-react'

const categories = [
  {
    icon: Cloud,
    title: 'Cloud',
    items: ['Azure', 'Azure DevOps', 'ARM Templates', 'Blob Storage', 'Monitoring'],
  },
  {
    icon: Code2,
    title: 'Programming',
    items: ['Python', 'SQL', 'JavaScript'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'Docker', 'VS Code', 'Linux'],
  },
  {
    icon: Shield,
    title: 'Concepts',
    items: ['Networking', 'CI/CD', 'Cloud Security', 'Automation'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Skills</motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div key={cat.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx * 0.05}} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <cat.icon className="text-sky-600" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cat.title}</h3>
              </div>
              <div className="mt-4 space-y-3">
                {cat.items.map((item, i) => (
                  <div key={item} className="">
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300"><span>{item}</span></div>
                    <div className="mt-2 h-2 w-full rounded-full bg-slate-200/70 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + (i*6)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
