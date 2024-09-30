import { jwtVerify } from "jose"

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET

  if (!secret || secret.length === 0) {
    throw new Error("Environment var JWT_SECRET is not set")
  }

  return secret
}

export const verifyToken = async (token) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecret())
    )
    return verified.payload
  } catch (error) {
    throw new Error("Your token has expired")
  }
}