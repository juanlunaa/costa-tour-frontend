import { textFont, titleFont } from "@/config/fonts"
import "./globals.css"
import { Toaster } from "sonner"
import { Providers } from "./providers"

export const metadata = {
  title: "Costa Tour",
  description: "Guia turistica de la ciudad de Cartagena",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${titleFont.variable} ${textFont.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <Toaster richColors position="bottom-left" closeButton />
      </body>
    </html>
  )
}
