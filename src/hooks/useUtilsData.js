import { fetchInterests } from "@/services/utils"
import { useEffect, useState } from "react"

export default function useUtilsData() {
  const [interesesBd, setInteresesBd] = useState([])

  // Se piden los intereses almacenados en la bd al backend y se almacenan en un estado
  useEffect(() => {
    const getIntereses = async () => {
      const data = await fetchInterests()
      setInteresesBd(data)
    }
    getIntereses()
  }, [])

  return { interesesBd }
}
