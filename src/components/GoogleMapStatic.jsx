export const GoogleMapStatic = ({ lat, lng }) => {
  return (
    <iframe
      src={`https://www.google.com/maps?q=${lat},${lng}&hl=es;z=14&output=embed`}
      className="w-full h-full sm:w-3/4 rounded-lg border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  )
}
