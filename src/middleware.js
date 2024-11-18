import { NextResponse } from "next/server"
import { getDashboardByRole, UserRoles, verifyToken } from "./logic/auth"

export async function middleware(req) {
  // Se obtiene el valor de la cookie que tiene el token
  const token = req.cookies.get("token")?.value

  // Se verifica la validez del token
  const payload = await verifyToken(token).catch((err) => console.log(err))
  const verifiedToken = token && payload

  // Si el usuario esta accediendo al login y no esta autenticado (no tiene token) se deja pasar
  if (req.nextUrl.pathname.startsWith("/auth") && !verifiedToken) {
    return
  }

  const role = payload?.role[0].authority

  // Si el usuario esta accediendo al login y esta autenticado es redireccionado al perfil
  if (req.url.includes("/auth") && verifiedToken) {
    return NextResponse.redirect(
      new URL(`/dashboard/${getDashboardByRole(role)}/info-profile`, req.url)
    )
  }

  // Si el usuario es diferente a administrador y esta tratando de acceder a alguna ruta del dashboard
  // administrador sera redireccionado a el dashboard definido para su tipo de usuario
  if (
    verifiedToken &&
    req.url.includes("admin-profile") &&
    role !== UserRoles.ADMINISTRADOR
  ) {
    return NextResponse.redirect(
      new URL(`/dashboard/${getDashboardByRole(role)}/info-profile`, req.url)
    )
  }

  if (
    verifiedToken &&
    req.url.includes("ally-profile") &&
    role !== UserRoles.ALIADO
  ) {
    return NextResponse.redirect(
      new URL(`/dashboard/${getDashboardByRole(role)}/info-profile`, req.url)
    )
  }

  // Si el usuario es diferente a turista y esta tratando de acceder a alguna ruta del dashboard
  // turista sera redireccionado a el dashboard definido para su tipo de usuario
  if (
    verifiedToken &&
    req.url.includes("customer-profile") &&
    role !== UserRoles.TURISTA
  ) {
    return NextResponse.redirect(
      new URL(`/dashboard/${getDashboardByRole(role)}/info-profile`, req.url)
    )
  }

  // Si el usuario es diferente a turista y esta tratando de acceder a la ruta de recomendaciones
  // sera redireccionado a la pagina inicial de categorias
  if (
    verifiedToken &&
    req.url.includes("/category/recomendations") &&
    role !== UserRoles.TURISTA
  ) {
    return NextResponse.redirect(new URL("/category/activities", req.url))
  }

  // Si el usuario no tiene un token valido y esta intentando acceder a una ruta protegida es redireccionado al login
  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/category/recomendations"],
}
