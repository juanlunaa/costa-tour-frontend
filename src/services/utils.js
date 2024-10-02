const server = process.env.NEXT_PUBLIC_BACKEND_SERVER

export const fetchInterests = async () => {
  const res = await fetch(`${server}/interest/all`)
  const data = await res.json()
  return data
}