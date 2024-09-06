import './globals.css'

export const metadata = {
  title: 'Costa Tour',
  description: 'Guia turistica de la ciudad de Cartagena',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
