import { UserStoreProvider } from "@/context/user"
import { textFont, titleFont } from "@/config/fonts"
import "./globals.css"
import { Toaster } from "sonner"

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
        <Toaster richColors position="bottom-left" closeButton />
      </body>
    </html>
  )
}
