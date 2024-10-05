import { BACKEND_SERVER } from "@/env"

export const fetchInterests = async () => {
  const res = await fetch(`${BACKEND_SERVER}/interest/all`)
  const data = await res.json()
  return data
}