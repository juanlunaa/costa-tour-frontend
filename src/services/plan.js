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

export const deletePlan = async (id) => {
  try {
    const res = await fetch(`${BACKEND_SERVER}/plan/delete/${id}`, {
      method: "DELETE",
      credentials: "include",
    })

    if (!res.ok) {
      const { message } = await res.json()

      let error

      if (res.status === 404) error = new ResourceNotFoundError(message)

      error.status = res.status
      return error
    }

    return { res: "Plan eliminado satisfactoriamente", status: res.status }
  } catch (err) {
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

export const getReservaInfo = async (external_reference) => {
  try {
    const res = await axios.get(
      `${BACKEND_SERVER}/booking/${external_reference}`
    )
    if (res.status !== 200) {
      const { message } = await res.data

      let error

      if (res.status === 404) error = new ResourceNotFoundError(message)

      error.status = res.status
      return error
    }
    return { res: res.data, status: res.status }
  } catch (err) {
    return { res: err.message, status: err.status || 500 }
  }
}

export const fetchFeedbacksByPlanId = async (id) => {
  try {
    const res = await axios.get(`${BACKEND_SERVER}/feedback/list/plan/${id}`)
    return res.data
  } catch (err) {
    return err
  }
}

export const saveFeedback = async (data) => {
  try {
    const res = await axios.post(`${BACKEND_SERVER}/feedback/save`, data)

    if (res.status !== 200) {
      let error

      if (res.status === 404) {
        const { message } = await res.data
        error = new ResourceNotFoundError(message)
      }

      error.status = res.status
      throw error
    }

    return { res: res.data, status: res.status }
  } catch (err) {
    return { res: err.message, status: err.status || 500 }
  }
}
