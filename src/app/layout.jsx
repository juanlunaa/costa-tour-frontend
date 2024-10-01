import { UserStoreProvider } from "@/context/user"
import { textFont, titleFont } from "@/config/fonts"
import "./globals.css"

export const metadata = {
  title: "Costa Tour",
  description: "Guia turistica de la ciudad de Cartagena",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${titleFont.variable} ${textFont.variable}`}>
      <body>
        <UserStoreProvider>
          {children}
        </UserStoreProvider>
      </body>
    </html>
  )
}
