import { BACKEND_SERVER } from "@/env"
import { FileCannotBeEmptyError, ResourceNotFoundError } from "@/erros"

export const fetchAllPlans = async () => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/plan/all`, {
      method: "GET",
      cache: "no-store",
    })

    return res.json()
  } catch (err) {
    return err
  }
}

export const createPlan = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/plan/create`, {
      method: "POST",
      credentials: "include",
      body: formData,
    })

    if (!res.ok) {
      const { message } = await res.json()

      let error

      if (res.status === 404) error = new ResourceNotFoundError(message)

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

export const updatePlan = async ({ planId, formData }) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/plan/update/${planId}`, {
      method: "PUT",
      credentials: "include",
      body: formData,
    })

    if (!res.ok) {
      const { message } = await res.json()

      let error

      if (res.status === 404) error = new ResourceNotFoundError(message)

      if (res.status === 400) error = new FileCannotBeEmptyError(message)

      error.status = res.status
      return error
    }
    const resJson = await res.json()

    return { res: resJson, status: res.status }
  } catch (err) {
    console.error(err)
    return { res: err.message, status: err.status || 500 }
  }
}

export const fetchPlanById = async (id) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/plan/${id}`, {
      method: "GET",
      cache: "no-store",
    })

    if (!res.ok) {
      const { message } = await res.json()

      let error

      if (res.status === 404) error = new ResourceNotFoundError(message)

      error.status = res.status
      return error
    }

    const resJson = await res.json()

    return { res: resJson, status: res.status }
  } catch (err) {
    return { res: err.message, status: err.status || 500 }
  }
}
