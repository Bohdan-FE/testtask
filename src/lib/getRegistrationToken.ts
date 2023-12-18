import { BASE_URL } from "./baseUrl"

 export const getRegistrationToken = async () => {
        const response = await fetch(`${BASE_URL}/token`)
        const data = response.json()
        return data  
    }