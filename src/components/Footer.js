import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Desarrollado por Batman🦇 para <span className={styles.accent}>Diego Alejandro Paloma Diaz</span> — 2026</span>
        </footer>
    )
}