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