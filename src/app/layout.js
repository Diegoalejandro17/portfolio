import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata = {
  title: 'Diego Paloma — Full Stack Developer',
  description: 'Portafolio de Diego Alejandro Paloma Díaz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body> 
        <ThemeProvider>
        <Navbar />
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}