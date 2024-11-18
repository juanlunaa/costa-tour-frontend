import { BACKEND_SERVER } from "@/env"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatSrcImage(src) {
  return src.startsWith("http") ? src : `${BACKEND_SERVER}${src}`
}

export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price)
}

export function getDayWeek(fecha) {
  const dayWeek = fecha.toLocaleDateString("es-ES", { weekday: "long" })
  return dayWeek
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
}
