import { NextResponse } from "next/server"
import { validateToken } from "./logic/middlewareFilters"
 
export async function middleware(request) {

  // Se extrae el JWT que esta en las cookies
  const tokenJwt = request.cookies.get("token")

  // Si el token es undefined significa que el usuario aun no esta autenticado
  // entonces es redireccionado al login

  if (tokenJwt === undefined) {

    // Si el usuario no tiene token y esta accediendo a la página de login o register, lo dejamos pasar
    if (request.nextUrl.pathname.includes("/auth")) {
      return NextResponse.next();
    }

    // Si esta accediendo a otra ruta protegida se redirecciona al login
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  // Se intenta extraer la informacion del token para verificar su validez 
  try {
    const { email, role } = await validateToken(tokenJwt) // <- Con la informacion extraida del payload se tiene pesado manejar el tema de la autorizacion

    // Si el usuario esta autenticado y trata de acceder a alguna ruta de autenticacion (login o register),
    // lo redirigimos al dashboard
    if (request.nextUrl.pathname.includes("/auth")) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    //  Si es valido se da acceso a la ruta que se quiere acceder
    return NextResponse.next()
  } catch (error) {
    // Si ocurre algun error, quiere decir que hay un problema con la validez del token
    // entonces se redirecciona al login para que obtenga uno
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }
}
 
export const config = {
  matcher: ["/dashboard", "/auth/:path*"],
}