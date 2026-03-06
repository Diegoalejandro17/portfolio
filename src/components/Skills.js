'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './Skills.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaGit, FaGithub, FaBootstrap, FaJava} from 'react-icons/fa'
import { SiNextdotjs, SiMysql, SiPostman, SiPostgresql, SiPython, SiDocker, SiKubernetes, SiVercel, SiNpm, SiJupyter, SiComposer } from 'react-icons/si'

const skillCategories = [
    {
  title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 color="#e34f26" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572b6" /> },
      { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
      { name: 'React', icon: <FaReact color="#61dafb" /> },
      { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
      { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" /> },
    ]
},
{
  title: 'backend',
    skills: [
      { name: 'PHP', icon: <FaPhp color="#777bb4" /> },
      { name: 'Python', icon: <SiPython color="#3776AB" />},
      { name: 'Java', icon: <FaJava color="#E43A3C" />},
      { name: 'Laravel', icon: <FaLaravel color="#ff2d20" /> },
      { name: 'MySQL', icon: <SiMysql color="#4479a1" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql color="#0064a5" />},
    ]
},
{
  title: 'Herramientas',
    skills: [
      { name: 'Git', icon: <FaGit color="#f05032" /> },
      { name: 'GitHub', icon: <FaGithub color="#ffffff" /> },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" /> },
      { name: "npm", icon: <SiNpm color="#CB3837" /> },
      { name: "Composer", icon: <SiComposer color="#440E03" />},
      { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },
    ]
},
{
  title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
      { name: "Vercel", icon: <SiVercel color="#FFFFFF" /> },
    ]
}
]

export default function Skills() {
    useScrollReveal()

  return (
    <section className={styles.skills} id="skills">
      <div className={`${styles.sectionLabel} reveal`}>
        <span>03</span> Habilidades
      </div>
      <h2 className={`${styles.sectionTitle} reveal reveal-delay-1`}>Mi stack<br />tecnológico.</h2>
      <div className={`${styles.grid} reveal reveal-delay-2`}>
        {skillCategories.map((cat) => (
          <div key={cat.title} className={styles.category}>
            <div className={styles.catTitle}>{cat.title}</div>
            {cat.skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                {skill.icon
                  ? <span className={styles.icon}>{skill.icon}</span>
                  : <span className={styles.dot}></span>
                }
                {skill.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

