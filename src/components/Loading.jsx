export const Loading = () => {
  return (
    <div className="absolute z-50 flex flex-col items-center justify-center h-full w-full">
      <div className="animate-spin h-16 w-16 border-4 border-customBlue border-t-transparent rounded-full mb-4"></div>
      <p className="text-lg text-gray-700">Cargando...</p>
    </div>
  )
}
