import { BASE_URL } from "./baseUrl"
import { Position } from "./types"

export const getPositions = async ():Promise<{success: string, positions: Position[]} | undefined> => {
        const response = await fetch(`${BASE_URL}/positions`)
        const data = response.json()
        return data
}