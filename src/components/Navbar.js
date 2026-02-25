'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { dark, setDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href='#hero' className={styles.logo}>
        D<span>.</span>Paloma
      </a>
      <div className={styles.right}>
        <ul className={styles.links}>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <button
          className={styles.toggle}
          onClick={() => setDark(!dark)}
          aria-label="Cambiar tema"
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}