import { UserProvider } from "@/context/user"
import "./globals.css"
import { textFont, titleFont } from "@/config/fonts"

export const metadata = {
  title: "Costa Tour",
  description: "Guia turistica de la ciudad de Cartagena",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${titleFont.variable} ${textFont.variable}`}>
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
