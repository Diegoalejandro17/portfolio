# 🚀 Portafolio — Diego Alejandro Paloma Díaz

Portafolio personal desarrollado con **Next.js**, diseño dark mode con estética terminal/código.

## 🛠️ Tecnologías utilizadas

- [Next.js](https://nextjs.org/) — Framework de React
- [React Icons](https://react-icons.github.io/react-icons/) — Iconos de tecnologías
- [EmailJS](https://www.emailjs.com/) — Envío de correos desde el formulario de contacto
- CSS Modules — Estilos por componente

## 📁 Estructura del proyecto
```
portfolio-diego/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       ├── Navbar.js
│       ├── Hero.js
│       ├── About.js
│       ├── Projects.js
│       ├── Skills.js
│       ├── Contact.js
│       └── Footer.js
├── public/
├── .env.local        ← No se sube a GitHub
└── .gitignore
```

## ⚙️ Instalación y uso

1. Clona el repositorio:
```bash
git clone https://github.com/Diegoalejandro17/portfolio-diego.git
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea el archivo `.env.local` en la raíz con tus credenciales de EmailJS:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📬 Contacto

- 📧 Email: diegoalejandropalomadiaz576@gmail.com
- 🐙 GitHub: [github.com/Diegoalejandro17](https://github.com/Diegoalejandro17)

---

Desarrollado por Batman🦇 para Diego Alejandro Paloma diaz 
