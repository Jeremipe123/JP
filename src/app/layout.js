import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'JEREMI PEREZ',
  description: 'Marca personal'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={ `${montserrat.variable}` }>
        { children }
      </body>
    </html>
  )
}
