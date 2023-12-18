import { BASE_URL } from "./baseUrl"

 export const getRegistrationToken = async () => {
     try {
        const response = await fetch(`${BASE_URL}/token`)
        const data = response.json()
        return data  
     } catch (error) {
        return error
     }
    }