import { Volkhov, Mulish } from "next/font/google"

export const titleFont = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
})

export const textFont = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
})
