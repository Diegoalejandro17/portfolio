'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal' 
import styles from './Projects.module.css'

const projects = [
    {
        num: 'PRJ - 001',
        icon: '📚',
        name: 'wisdom',
        desc: 'Plataoforma educativa para conectar estudiantes con con contenido de calidad. gestion de cursos, usuarios y progreso de aprendizaje en un solo lugar.',
        tags: ['React', 'php', 'MySQL'],
        link: '3'
    },
    {
        num: 'PRJ - 002',
        icon: '✨',
        name: 'kaboga',
        desc: 'sitio web de una marca de belleza, catalogo de servicios y productos.',
        tags: ['Next.js' , 'css', 'bootstrap', 'JavaScript'],
        link: '#'
    },
    {
        num: 'PRJ - 003',
        icon: '🌱',
        name: 'AgroBitacora',
        desc: 'Plataforma tecnológica para agricultores que facilita el registro, seguimiento y análisis de sus cultivos. Tecnología al servicio del campo colombiano.',
        tags: ['React, Laravel', 'supabase'],
        links: '#'
    }
]

export default function Projects() {
    useScrollReveal()

    return (
        <section className={styles.projects} id="projects">
            <div className={`${styles.sectionLabel} reveal`}>
                <span>02</span>Proyectos
            </div>
            <h2 className={`${styles.sectionTitle} reveal reveal-delay-1`}>Lo que <br />he construido</h2>
            <div className={`${styles.grid} reveal reveal-delay-2`}>
                 {projects.map((project) => (
          <div key={project.num} className={styles.card}>
            <div className={styles.cardNum}>{project.num}</div>
            <div className={styles.cardIcon}>{project.icon}</div>
            <h3 className={styles.cardName}>{project.name}</h3>
            <p className={styles.cardDesc}>{project.desc}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <a href={project.link} className={styles.cardLink}>Ver proyecto →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
