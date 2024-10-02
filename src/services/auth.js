const server = process.env.NEXT_PUBLIC_BACKEND_SERVER

export const login = async (data) => {
  try {
    const res = await fetch(`${server}/user/auth`, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    
    if (res.status === 403) {
      const errorMessage = await res.text()
      const error = new Error(`Error ${res.status}: ${errorMessage || 'No se pudo iniciar sesión'}`)
      error.status = res.status
      throw error
    }

    const resJson = await res.json()
  
    return { res: resJson, status: res.status }
  } catch (err) {
    console.error("Error en la solicitud de inicio de sesión:", err)
    return { error: err.message, status: err.status || 500 }
  }
}

export const registerTurist = async (data) => {
  const res = await fetch(`${server}/turist/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  
  const resJson = await res.json()

  return { res: resJson, status: res.status }
}

export const fetchProfile = async () => {
  const res = await fetch(`${server}/user/profile`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  })

  const resJson = await res.json()
  return { res: resJson, status: res.status }
}

export const logout = async () => {
  const res = await fetch(`${server}/user/logout`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  })

  const resJson = await res.json()

  return { res: resJson, status: res.status }
}

export const checkEmailAvailability = async (email) => {
  try {
    const res = await fetch(`${server}/user/validate-email?email=${email}`)
    
    return res.status === 200 ? true : false

  } catch (err) {
    console.log(err)
  } 
}

export const checkDniAvailability = async (dni) => {
  try {
    const res = await fetch(`${server}/turist/validate-dni?dni=${dni}`)
    
    return res.status === 200 && true

  } catch (err) {
    return false
  } 
}
