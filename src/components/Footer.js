import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Diego <span className={styles.accent}>Alejandro</span> Paloma Díaz</span>
            <span>Diseñado & desarrollado con <span className={styles.accent}>♥</span> — 2025</span>
        </footer>
    )
}