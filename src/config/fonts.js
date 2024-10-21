import { Volkhov, Mulish, Anton } from "next/font/google"

export const titleFont = Volkhov({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-volkhov",
})

export const textFont = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
})

export const textFont2 = Anton({
  subsets: ["latin"],
  weight:["400"],
  style:["normal"],
  variable: "--font-anton",
})