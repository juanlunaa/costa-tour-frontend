import { NextResponse } from "next/server"
import { verifyToken } from "./logic/auth"
 
export async function middleware(req) {
  // return
  // Se obtiene el valor de la cookie que tiene el token
  const token = req.cookies.get("token")?.value

  // Se verifica la validez del token
  const verifiedToken = 
    token &&
    (await verifyToken(token).catch((error) => {
      console.log(error)
    }))

  // Si el usuario esta accediendo al login y no esta autenticado (no tiene token) se deja pasar
  if (req.nextUrl.pathname.startsWith("/auth") && !verifiedToken) {
    return
  }

  console.log(req.url)
  // Si el usuario esta accediendo al login y esta autenticado es redireccionado al perfil
  if (req.url.includes("/auth") && verifiedToken) {
    return NextResponse.redirect(new URL("/dashboard/customer-profile/info-profile", req.url))
  }

  // Si el usuario no tiene un token valido y esta intentando acceder a una ruta protegida es redireccionado al login
  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }
}
 
export const config = {
  matcher: [
    "/dashboard/customer-profile/:path*",
    "/auth/:path*"
  ]
}