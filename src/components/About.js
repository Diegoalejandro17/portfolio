'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './About.module.css'

export default function About() {
    useScrollReveal()

    return (
    <section className={styles.about} id="about">
      <div className={`${styles.sectionLabel} reveal`}>
        <span>01</span> Sobre mí
      </div>
      <h2 className={`${styles.sectionTitle} reveal reveal-delay-1`}>Pasión por<br />el código.</h2>
      <div className={`${styles.grid} reveal reveal-delay-2`}>
        <div className={styles.text}>
          <p>
            Soy <strong>Diego Alejandro Paloma Díaz</strong>, Full Stack Developer 
            con experiencia construyendo productos digitales completos. Me apasiona 
            transformar ideas en software funcional, escalable y con buena 
            experiencia de usuario.
          </p>
          <p>
            Trabajo tanto en el <strong>frontend</strong> — creando interfaces 
            modernas con React, Angular y Next.js — como en el <strong>backend</strong>, 
            desarrollando APIs sólidas con Laravel y PHP, conectadas a bases 
            de datos MySQL.
          </p>
          <p>Creo en el código limpio, la colaboración efectiva y en aprender algo nuevo cada día.</p>
          <div className={styles.stats}>
            <div className={styles.statBox}>
              <div className={styles.statNum}>3+</div>
              <div className={styles.statLabel}>Proyectos destacados</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNum}>12+</div>
              <div className={styles.statLabel}>Tecnologías dominadas</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNum}>100%</div>
              <div className={styles.statLabel}>Compromiso</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statNum}>∞</div>
              <div className={styles.statLabel}>Ganas de aprender</div>
            </div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.dotR}></span>
              <span className={styles.dotY}></span>
              <span className={styles.dotG}></span>
            </div>
            <div className={styles.codeLine}><span className={styles.ln}>1</span><span className={styles.co}>// diego.config.js</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>2</span><span></span></div>
            <div className={styles.codeLine}><span className={styles.ln}>3</span><span><span className={styles.kw}>const</span> <span className={styles.fn}>developer</span> = {'{'}</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>4</span><span>&nbsp;&nbsp;<span className={styles.prop}>name</span>: <span className={styles.str}>"Diego Paloma"</span>,</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>5</span><span>&nbsp;&nbsp;<span className={styles.prop}>role</span>: <span className={styles.str}>"Full Stack Developer"</span>,</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>6</span><span>&nbsp;&nbsp;<span className={styles.prop}>location</span>: <span className={styles.str}>"Colombia 🇨🇴"</span>,</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>7</span><span>&nbsp;&nbsp;<span className={styles.prop}>available</span>: <span className={styles.kw}>true</span>,</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>8</span><span>&nbsp;&nbsp;<span className={styles.prop}>focus</span>: [</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>9</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.str}>"Clean Code"</span>,</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>10</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.str}>"UX-driven Dev"</span>,</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>11</span><span>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.str}>"Scalable Systems"</span></span></div>
            <div className={styles.codeLine}><span className={styles.ln}>12</span><span>&nbsp;&nbsp;]</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>13</span><span>{'}'}</span></div>
            <div className={styles.codeLine}><span className={styles.ln}>14</span><span></span></div>
            <div className={styles.codeLine}><span className={styles.ln}>15</span><span><span className={styles.kw}>export default</span> <span className={styles.fn}>developer</span>;</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}