import styles from './Contact.module.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


export default function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.sectionLabel}>
                <span>04</span> Contacto
            </div>
            <div className={styles.inner}>
                <h2 className={styles.sectionTitle}>¿Tienes un<br />proyecto en mente?</h2>
                <p className={styles.desc}>
                    Estoy disponible para proyectos freelance, colaboraciones y 
                    oportunidades laborales. No dudes en escribirme — respondo rápido.
                </p>
                <div className={styles.links}>
                    <a href="diegoalejandropalomadiaz576@gmail.com" className={styles.linkRow}>
                        <div className={styles.linkLeft}>
                            <FaEnvelope className={styles.linkIcon} />
                            <div>
                                <div className={styles.linkLabel}>Email</div>
                                <div className={styles.linkValue}>tucorreo@gmail.com</div>
                            </div>
                        </div>
                        <span className={styles.arrow}>→</span>
                    </a>
                    <a href="https://github.com/Diegoalejandro17" target="-blank" className={styles.linkRow}>
                        <div className={styles.Left}> 
                            <FaGithub className={styles.linkIcon} />
                            <div>
                                <div className={styles.linkLabel}>Github</div>
                                <div className={styles.linkValue}>github.com/Diegoalejandro17</div>
                            </div>
                        </div> 
                        <span className={styles.arrow}>→</span>
                    </a>
                    <a href="https://linkedin.com/in/tuusuario" target="_blank" className={styles.linkRow}>
                        <div className={styles.linkLeft}>
                            <FaLinkedin className={styles.linkIcon} />
                            <div>
                                <div className={styles.linkLabel}>LinkedIn</div>
                                <div className={styles.linkValue}>linkedin.com/in/tuusuario</div>
                            </div>
                        </div>
                            <span className={styles.arrow}>→</span>
                    </a>
                </div>
                <a href="mailto:diegoalejandropalomadiaz576@gmail.com" className={styles.btn}>
                    Enviar correo
                </a>
            </div>
        </section>
    )
}