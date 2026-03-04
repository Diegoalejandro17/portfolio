import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.grid}></div>
            <div className={styles.glow}></div>
            <div className={styles.content}>
            <div className={styles.tag}> Full Stack Developer - Bogota Colombia</div>
                <h1 className={styles.name}>
                    Diego <br />
                    <span className={styles.accent}>Alejandro</span>
                    <span className={styles.line2}>Paloma Diaz</span>
                </h1>
                <p className={styles.role}>
                    Construyo experiencias digitales completas —<br />
                    desde interfaces web hasta arquitecturas backend robustas.<br />
                </p>
                <div className={styles.cta}>
                    <a href="#projects" className={styles.btnPrimary}>Ver proyectos →</a>
                    <a href="#contact" className={styles.btnOutline}>Hablemos</a>
                </div> 
            </div> 
            <div className={styles.scroll}>Scroll para explorar</div>
        </section>
    )
}