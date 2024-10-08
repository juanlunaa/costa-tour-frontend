import { BACKEND_SERVER } from "@/env"
import {
  ChangePasswordError,
  CouldNotSavePlanError,
  FileCannotBeEmptyError,
  UserNotFoundError,
} from "@/erros"

export const updatePersonalDataTurist = async ({ dni, data }) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/turist/update/${dni}`, {
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

export const updatePersonalDataAdmin = async ({ userId, data }) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/admin/update/${userId}`, {
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
    const res = await fetch(
      `${BACKEND_SERVER}/user/update/credentials?userId=${userId}`,
      {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (!res.ok) {
      if (res.status === 400) {
        const { message } = await res.json()
        const error = new ChangePasswordError(message)
        error.status = res.status
        throw error
      }
    }

    return {
      res: "Contraseña actualizada correctamente",
      success: true,
      status: res.status,
    }
  } catch (err) {
    return { res: err.message, success: false, status: err.status || 500 }
  }
}

export const updateAvatar = async (data) => {
  try {
    console.log(data)
    const res = await fetch(`${BACKEND_SERVER}/user/update/avatar`, {
      method: "PUT",
      credentials: "include",
      body: data,
    })

    if (!res.ok) {
      const { message } = await res.json()

      let error

      if (res.status === 404) error = new UserNotFoundError(message)

      if (res.status === 400) error = new FileCannotBeEmptyError(message)

      error.status = res.status
      return error
    }

    const resJson = await res.json()

    return { res: resJson, status: res.status }
  } catch (err) {
    return { res: err.message, status: err.status || 500 }
  }
}

export const toggleSavePlanTurist = async ({ dni, planId }) => {
  try {
    const res = await fetch(
      `${BACKEND_SERVER}/turist/favorite/toggle?dni=${dni}&planId=${planId}`,
      {
        method: "POST",
        credentials: "include",
      }
    )

    if (!res.ok) {
      const error = new CouldNotSavePlanError("Could not save plan")
      error.status = res.status
      throw error
    }

    const resJson = await res.json()

    const { message } = resJson

    return { res: message, status: res.status }
  } catch (err) {
    return { res: err.message, status: err.status || 500 }
  }
}

export const fetchFavoritePlansByTurist = async (dni) => {
  try {
    const res = await fetch(
      `${BACKEND_SERVER}/turist/favorite/all?dni=${dni}`,
      {
        credentials: "include",
      }
    )

    if (!res.ok) {
      if (res.status === 404) {
        const { message } = await res.json()
        const error = new UserNotFoundError(message)
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
