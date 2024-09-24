const server = process.env.NEXT_PUBLIC_BACKEND_SERVER

export const fetchAllPaises = async () => {
  try {
    const res = await fetch(`${server}/location/country/all`)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.error("Error fetching countries:", error)
    return []
  }
}

export const fecthEstadosByPais = async (idPais) => {
  try {
    const res = await fetch(`${server}/location/states/${idPais}`)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.error(`Error fetching states by country id: ${idPais}`, error)
    return []
  }
}

export const fetchCiudadesByEstado = async (idEstado) => {
  try {
    const res = await fetch(`${server}/location/cities/${idEstado}`)
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.error(`Error fetching cities by state id: ${idEstado}`, error)
    return []
  }
}
