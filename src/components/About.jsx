import { motion } from 'framer-motion'

export default function About() {
  const counters = [
    { label: 'Projects', value: 8 },
    { label: 'Skills', value: 20 },
    { label: 'Experience (months)', value: 6 },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-sky-50 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About Me</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="md:col-span-2 text-slate-700 dark:text-slate-300 leading-relaxed">
            Passionate about cloud infrastructure and automation. Currently working as an Azure Cloud Intern at PCS Solution, Pune, gaining real-world experience in Azure deployment, resource management, and networking. Focused on building scalable and secure cloud systems, and continuously improving technical and problem-solving skills.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="bg-white/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700 rounded-2xl p-5 shadow-sm">
            <p className="text-sky-700 dark:text-sky-300 font-semibold">Currently learning and working on Microsoft Azure Cloud.</p>
            <ul className="mt-3 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
              <li>Azure: VMs, Networking, Storage, Identity, Monitoring</li>
              <li>Skilled in Python, Linux, Git, Docker</li>
              <li>Interested in DevOps, IaC, Cloud Automation</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {counters.map((c, i) => (
            <motion.div key={c.label} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay: 0.1 * i}} className="rounded-2xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700 p-6 text-center shadow">
              <motion.div initial={{scale:0.9}} whileInView={{scale:1}} viewport={{once:true}} transition={{type:'spring', stiffness:120}} className="text-4xl font-extrabold text-sky-600">{c.value}+</motion.div>
              <div className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
