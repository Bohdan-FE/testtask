import { BASE_URL } from "./baseUrl"


export const getUsers = async (page: number, count: number) => {
        const data = await fetch(`${BASE_URL}/users?page=${page}&count=${count}`, {cache: 'no-store'})
        return data.json()    
}
 



