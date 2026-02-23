'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ from_name: '', from_email: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  useScrollReveal()

  return (
    <section className={styles.contact} id="contact">
      <div className={`${styles.sectionLabel} reveal`}>
        <span>04</span> Contacto
      </div>
      <div className={styles.inner}>
  <h2 className={`${styles.sectionTitle} reveal reveal-delay-1`}>¿Tienes un<br />proyecto?</h2>
  <p className={styles.desc}>
    Estoy disponible para proyectos freelance, colaboraciones y
    oportunidades laborales. No dudes en escribirme.
  </p>
  <div className={`${styles.grid} reveal reveal-delay-2`}>
    <div className={styles.links}>
      <a href="mailto:diegoalejandropalomadiaz576@gmail.com" className={styles.linkRow}>
        <div className={styles.linkLeft}>
          <FaEnvelope className={styles.linkIcon} />
          <div>
            <div className={styles.linkLabel}>Email</div>
            <div className={styles.linkValue}>diegoalejandropalomadiaz576@gmail.com</div>
          </div>
        </div>
        <span className={styles.arrow}>→</span>
      </a>
      <a href="https://github.com/Diegoalejandro17" target="_blank" className={styles.linkRow}>
        <div className={styles.linkLeft}>
          <FaGithub className={styles.linkIcon} />
          <div>
            <div className={styles.linkLabel}>GitHub</div>
            <div className={styles.linkValue}>github.com/Diegoalejandro17</div>
          </div>
        </div>
        <span className={styles.arrow}>→</span>
      </a>
      <a href="https://www.linkedin.com/in/diego-alejandro-paloma-diaz-ab4008308/" target="_blank" className={styles.linkRow}>
        <div className={styles.linkLeft}>
          <FaLinkedin className={styles.linkIcon} />
          <div>
            <div className={styles.linkLabel}>LinkedIn</div>
            <div className={styles.linkValue}>Diego Alejandro Paloma Diaz</div>
          </div>
        </div>
        <span className={styles.arrow}>→</span>
      </a>
    </div>
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="from_name"
          placeholder="Tu nombre"
          value={form.from_name}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          name="from_email"
          placeholder="Tu email"
          value={form.from_email}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className={styles.textarea}
        />
      </div>
      <button type="submit" className={styles.btn} disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje →'}
      </button>
      {status === 'success' && <p className={styles.success}>¡Mensaje enviado! Me pondre en contacto contigo pronto</p>}
      {status === 'error' && <p className={styles.error}>Hubo un error, intenta de nuevo.</p>}
    </form>
  </div>
</div>
    </section>
  )
}