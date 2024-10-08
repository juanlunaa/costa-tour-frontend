import { jwtVerify } from "jose"

export const UserRoles = {
  TURISTA: "TURISTA",
  ADMINISTRADOR: "ADMINISTRADOR",
  ALIADO: "ALIADO",
}

export const getDashboardByRole = (role) => {
  if (role === UserRoles.ADMINISTRADOR) return "admin-profile"
  if (role === UserRoles.ALIADO) return "admin-profile"
  if (role === UserRoles.TURISTA) return "customer-profile"
}

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET

  if (!secret || secret.length === 0) {
    throw new Error("Environment var JWT_SECRET is not set")
  }

  return secret
}

export const verifyToken = async (token) => {
  try {
    if (!token) return
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecret())
    )
    return verified.payload
  } catch (error) {
    throw new Error("Your token has expired")
  }
}
