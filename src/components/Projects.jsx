import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Smart Attendance System using Face Recognition',
    desc: 'Automated attendance tracking using Python, OpenCV, and Flask with real-time face recognition.',
    stack: ['Python', 'OpenCV', 'Flask'],
    link: '#'
  },
  {
    title: 'AI-Driven Retail Inventory Management',
    desc: 'Computer vision powered stock monitoring and demand forecasting to optimize retail inventory.',
    stack: ['Computer Vision', 'Data Science'],
    link: '#'
  },
  {
    title: 'Movie Recommendation System using BERT',
    desc: 'Natural language processing based recommendations leveraging BERT embeddings.',
    stack: ['NLP', 'Deep Learning'],
    link: '#'
  },
  {
    title: 'E-Commerce Website (GM Cart)',
    desc: 'Full-stack e-commerce web app with Django, Bootstrap, and SQL backend.',
    stack: ['Django', 'Bootstrap', 'SQL'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Projects</motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition overflow-hidden">
              <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-sky-400/30 to-blue-600/30 ring-1 ring-sky-500/20" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 transition">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <span key={s} className="text-xs rounded-full bg-sky-50 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200 px-2 py-1">{s}</span>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center text-sm font-semibold text-sky-700 dark:text-sky-300">View Code →</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
