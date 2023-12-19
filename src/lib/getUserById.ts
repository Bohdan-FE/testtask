import { BASE_URL } from "./baseUrl"

export const getUserById = async (id: number) => {
    const response = await fetch(`${BASE_URL}/users/${id}`)
    return response.json()
}