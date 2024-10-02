const server = process.env.NEXT_PUBLIC_BACKEND_SERVER

export const login = async (data) => {
  const res = await fetch(`${server}/user/auth`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const resJson = await res.json()

  return { res: resJson, status: res.status }
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