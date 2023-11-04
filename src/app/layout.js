import './globals.css'

export const metadata = {
  title: 'JEREMI PEREZ',
  description: 'Marca personal'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body>
        { children }
      </body>
    </html>
  )
}
