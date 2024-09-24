import { fecthEstadosByPais, fetchCiudadesByEstado, fetchAllPaises } from "@/services/location"
import { useEffect, useState } from "react"

export default function useLocationData() {
  const [locationData, setLocationData] = useState({
    paises: [],
    estados: [],
    ciudades: [],
  })

  const [locationSelect, setLocationSelect] = useState({
    pais: 0,
    estado: 0,
  })

  // funcion generica para manejar el cambio del pais y estado seleccionado
  const handleChange = (e) => {
    const { name, value } = e.target
    setLocationSelect((prevLocationSelect) => ({
      ...prevLocationSelect,
      [name]: value,
    }))
  }

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
    if (!locationSelect.pais) return

    const fetchEstados = async () => {
      const estadosData = await fecthEstadosByPais(locationSelect.pais)
      setLocationData((prevLocData) => ({ ...prevLocData, estados: estadosData, ciudades: [] }))
    }
    fetchEstados()
  }, [locationSelect.pais])

  // se cargan las ciudades cuando se selecciona un estado
  useEffect(() => {
    if (!locationSelect.estado) return

    const fetchCiudades = async () => {
      const ciudadesData = await fetchCiudadesByEstado(locationSelect.estado)
      setLocationData((prevLocData) => ({ ...prevLocData, ciudades: ciudadesData }))
    }
    fetchCiudades()
  }, [locationSelect.estado])

  return {
    locationData,
    locationSelect,
    handleChange,
  }
}
