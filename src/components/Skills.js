import styles from './Skills.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaGit, FaGithub, FaBootstrap } from 'react-icons/fa'
import { SiNextdotjs, SiMysql, SiPostman } from 'react-icons/si'

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
      { name: 'Laravel', icon: <FaLaravel color="#ff2d20" /> },
      { name: 'MySQL', icon: <SiMysql color="#4479a1" /> },
    ]
},
{
    title: 'Herramientas',
    skills: [
      { name: 'Git', icon: <FaGit color="#f05032" /> },
      { name: 'GitHub', icon: <FaGithub color="#ffffff" /> },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" /> },
    ]
  }
]

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.sectionLabel}>
        <span>03</span> Habilidades
      </div>
      <h2 className={styles.sectionTitle}>Mi stack<br />tecnológico.</h2>
      <div className={styles.grid}>
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

