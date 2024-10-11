import { useEffect } from "react"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { getAddressFromLatLng } from "@/services/location"

const LocationMarker = ({ value, onChange }) => {
  const map = useMapEvents({
    async click(e) {
      map.flyTo(e.latlng, map.getZoom())
      const address = await getAddressFromLatLng(e.latlng)
      onChange({
        latitud: e.latlng.lat,
        longitud: e.latlng.lng,
        direccion: address,
      })
    },
  })

  return value === null ? null : (
    <Marker position={{ lat: value.latitud, lng: value.longitud }}>
      <Popup>{value.direccion}</Popup>
    </Marker>
  )
}

const InteractiveMap = ({ value, onChange }) => {
  useEffect(() => {
    // Configurar los íconos de Leaflet
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    })
  }, [])

  return (
    <MapContainer
      center={[10.401102709574074, -75.50450982843041]}
      zoom={12}
      style={{ height: "100%", width: "100%", borderRadius: "20px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker value={value} onChange={onChange} />
    </MapContainer>
  )
}

export default InteractiveMap
