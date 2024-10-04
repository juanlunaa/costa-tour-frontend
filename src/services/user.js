import { ChangePasswordError } from "@/erros"

const server = process.env.NEXT_PUBLIC_BACKEND_SERVER

export const updatePersonalDataTurist = async ({ dni, data }) => {
  try {
    const res = await fetch(`${server}/turist/update/${dni}`, {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const resJson = await res.json()

    return { res: resJson, status: res.status }
  } catch (err) {
    console.error(err)
  }
}

export const updateCredentials = async ({ userId, data }) => {
  try {
    const res = await fetch(`${server}/user/update/credentials?userId=${userId}`, {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      const { message } = await res.json()

      if (res.status === 400) {
        const error = new ChangePasswordError(message)
        error.status = res.status
        throw error
      }
    }

    const resJson = await res.json()

    return { res: resJson, status: res.status }
  } catch (err) {
    return { res: err.message, status: err.status || 500 }
  }
}