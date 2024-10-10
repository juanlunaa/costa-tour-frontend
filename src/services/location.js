import { BACKEND_SERVER } from "@/env"
import axios from "axios"

export const fetchAllPaises = async () => {
  try {
    const res = await axios.get(`${BACKEND_SERVER}/location/country/all`)
    return res.data.map((pais) => ({
      id: pais.id?.toString(),
      label: pais.name,
    }))
  } catch (error) {
    console.error("Error fetching countries:", error)
    return []
  }
}

export const fecthEstadosByPais = async (idPais) => {
  try {
    const res = await axios.get(`${BACKEND_SERVER}/location/states/${idPais}`)
    return res.data.map((estado) => ({
      id: estado.id?.toString(),
      label: estado.name,
    }))
  } catch (error) {
    console.error(`Error fetching states by country id: ${idPais}`, error)
    return []
  }
}

export const fetchCiudadesByEstado = async (idEstado) => {
  try {
    const res = await axios.get(`${BACKEND_SERVER}/location/cities/${idEstado}`)
    return res.data.map((ciudad) => ({
      id: ciudad.id?.toString(),
      label: ciudad.name,
    }))
  } catch (error) {
    console.error(`Error fetching cities by state id: ${idEstado}`, error)
    return []
  }
}
