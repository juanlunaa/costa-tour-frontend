import { BACKEND_SERVER } from "@/env"
import { FileCannotBeEmptyError, ResourceNotFoundError } from "@/erros"
import axios from "axios"

export const fetchAllPlans = async () => {
  try {
    const res = await axios.get(`${BACKEND_SERVER}/plan/all`)
    return res.data
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
      credentials: "include",
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

export const fetchRecomendations = async (turistDni) => {
  try {
    const res = await axios.get(
      `${BACKEND_SERVER}/plan/recomendation?dniTurista=${turistDni}`,
      { credentials: "include" }
    )
    return res.data
  } catch (err) {
    return err
  }
}

export const fetchAllPlansExclusives = async () => {
  try {
    const res = await axios.get(`${BACKEND_SERVER}/plan/exclusive/all`)
    return res.data
  } catch (err) {
    return err
  }
}

export const createPlanExclusive = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/plan/exclusive/create`, {
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

export const fetchPlanExclusiveById = async (id) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/plan/exclusive/${id}`, {
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
