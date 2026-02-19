'use clieent'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=> {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.remove.EventListener('scroll', handleScroll)
    }, [])

    return (
        <nav classname={`${style.nav} ${scrolled ? styles.scrolled : ''}`}>
            <a href='#hero' classname={styles.logo}>
                Diego <span>.</span> Paloma 
            </a>
            <ul classname={styles.navlinks}>
            <li><a href="#about">Sobre mi</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="contact">Contacto</a></li>
            </ul>
        </nav>
    )
}