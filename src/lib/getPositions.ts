'use server'

import { BASE_URL } from "./baseUrl"


export const getPositions = async () => {
    try {
        const response = await fetch(`${BASE_URL}/positions`)
        const data = response.json()
        return data
    }
    catch (error) {
        console.log(error)
    }
}