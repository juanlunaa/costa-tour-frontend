import { BACKEND_SERVER } from "@/env"

export const fetchAllPaises = async () => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/location/country/all`)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.error("Error fetching countries:", error)
    return []
  }
}

export const fecthEstadosByPais = async (idPais) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/location/states/${idPais}`)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.error(`Error fetching states by country id: ${idPais}`, error)
    return []
  }
}

export const fetchCiudadesByEstado = async (idEstado) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/location/cities/${idEstado}`)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.error(`Error fetching cities by state id: ${idEstado}`, error)
    return []
  }
}
