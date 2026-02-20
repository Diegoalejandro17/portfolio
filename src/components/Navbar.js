'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=> {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <a href='#hero' className={styles.logo}>
                Paloma <span>.</span> Dev 
            </a>
            <ul className={styles.links}>
            <li><a href="#about">Sobre mi</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="contact">Contacto</a></li>
            </ul>
        </nav>
    )
}