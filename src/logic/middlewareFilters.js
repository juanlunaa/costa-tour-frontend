import { jwtVerify } from "jose"

const secret = process.env.JWT_SECRET

export const validateToken = async ({ value }) => {
  const { payload } = await jwtVerify(
    value,
    new TextEncoder().encode(secret)
  )
  return { email: payload.sub, role: payload.role?.[0]?.authority }
}