import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
        <Footer/>
      </body>
    </html>
  )
}