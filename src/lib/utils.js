import { BACKEND_SERVER } from "@/env"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatSrcImage(src) {
  return src.startsWith("http") ? src : `${BACKEND_SERVER}${src}`
}

export function getDayWeek(fecha) {
  const dayWeek = fecha.toLocaleDateString("es-ES", { weekday: "long" })
  return dayWeek
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
}
