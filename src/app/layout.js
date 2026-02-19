import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Diego Paloma — Full Stack Developer',
  description: 'Portafolio de Diego Alejandro Paloma Díaz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}