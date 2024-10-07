import {
  fecthEstadosByPais,
  fetchCiudadesByEstado,
  fetchAllPaises,
} from "@/services/location"
import { useEffect, useState } from "react"

export default function useLocationData() {
  const [locationData, setLocationData] = useState({
    paises: [],
    estados: [],
    ciudades: [],
  })

  // console.log({ idPais, idEstado  })
  const [locationSelect, setLocationSelect] = useState({
    pais: "",
    estado: "",
  })

  // funcion generica para manejar el cambio del pais y estado seleccionado
  const handleChange = (e) => {
    const { name, value } = e.target
    setLocationSelect((prevLocationSelect) => {
      const newState = { ...prevLocationSelect, [name]: value }
      return newState
    })
  }

  const updateLocationSelect = ({ pais, estado }) => {
    setLocationSelect({ pais, estado })
  }

  // se cargan los países al montar el hook
  useEffect(() => {
    const fetchPaises = async () => {
      // console.log({ idPais, idEstado  })

      const paisesData = await fetchAllPaises()
      setLocationData((prevLocData) => ({ ...prevLocData, paises: paisesData }))

      // if (idPais !== null && idPais) {
      //   const estadosData = await fecthEstadosByPais(idPais)
      //   setLocationData((prevLocData) => ({ ...prevLocData, estados: estadosData, ciudades: [] }))
      // }

      // if (idEstado !== null && idEstado) {
      //   const ciudadesData = await fetchCiudadesByEstado(idEstado)
      //   setLocationData((prevLocData) => ({ ...prevLocData, ciudades: ciudadesData }))
      // }
    }
    fetchPaises()
  }, [])

  // se cargan los estados cuando se selecciona un país
  useEffect(() => {
    if (!locationSelect.pais) return

    const fetchEstados = async () => {
      const estadosData = await fecthEstadosByPais(locationSelect.pais)
      setLocationData((prevLocData) => ({
        ...prevLocData,
        estados: estadosData,
        ciudades: [],
      }))
    }
    fetchEstados()
  }, [locationSelect.pais])

  // se cargan las ciudades cuando se selecciona un estado
  useEffect(() => {
    if (!locationSelect.estado) return

    const fetchCiudades = async () => {
      const ciudadesData = await fetchCiudadesByEstado(locationSelect.estado)
      setLocationData((prevLocData) => ({
        ...prevLocData,
        ciudades: ciudadesData,
      }))
    }
    fetchCiudades()
  }, [locationSelect.estado])

  return {
    locationData,
    locationSelect,
    handleChange,
    updateLocationSelect,
  }
}
