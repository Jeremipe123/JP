import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata = {
    title: 'JP',
    description: 'Marca personal sobre JP',
  }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}