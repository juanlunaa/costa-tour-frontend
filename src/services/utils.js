import { BACKEND_SERVER } from "@/env"
import axios from "axios"

export const fetchInterests = async () => {
  const res = await axios.get(`${BACKEND_SERVER}/interest/all`)
  return res.data
}

export const fetchCharacteristics = async () => {
  const res = await axios.get(`${BACKEND_SERVER}/characteristic/all`)
  return res.data.map((item) => ({
    id: item.id?.toString(),
    label: item.palabraClave,
  }))
}
