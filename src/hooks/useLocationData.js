import {
  fecthEstadosByPais,
  fetchCiudadesByEstado,
  fetchAllPaises,
} from "@/services/location"
import { useEffect, useState } from "react"

export default function useLocationData({ inputPais, inputEstado }) {
  const [locationData, setLocationData] = useState({
    paises: [],
    estados: [],
    ciudades: [],
  })

  // se cargan los países al montar el hook
  useEffect(() => {
    const fetchPaises = async () => {
      const paisesData = await fetchAllPaises()
      setLocationData((prevLocData) => ({ ...prevLocData, paises: paisesData }))
    }
    fetchPaises()
  }, [])

  // se cargan los estados cuando se selecciona un país
  useEffect(() => {
    if (!inputPais) return

    const fetchEstados = async () => {
      const estadosData = await fecthEstadosByPais(inputPais)
      setLocationData((prevLocData) => ({
        ...prevLocData,
        estados: estadosData,
        ciudades: [],
      }))
    }
    fetchEstados()
  }, [inputPais])

  // se cargan las ciudades cuando se selecciona un estado
  useEffect(() => {
    if (!inputEstado) return

    const fetchCiudades = async () => {
      const ciudadesData = await fetchCiudadesByEstado(inputEstado)
      setLocationData((prevLocData) => ({
        ...prevLocData,
        ciudades: ciudadesData,
      }))
    }
    fetchCiudades()
  }, [inputEstado])

  return { locationData }
}
