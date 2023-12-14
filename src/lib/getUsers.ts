'use server'

import { revalidatePath } from "next/cache"
import { BASE_URL } from "./baseUrl"
import { User } from "./types"

export const getUsers = async (page: number, count: number) => {
    try {
        const data = await fetch(`${BASE_URL}/users?page=${page}&count=${count}`, {cache: 'no-store'})
        return data.json()  
    } catch (error) {
        console.log(error)
    }   
}
 
export const getNextUsersPage = async (url: string) => { 
    try {
        const data = await fetch(url)
        return data.json()
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async (url?: string | null) => {
    const users = await getUsers(1, 6)
    const allUsers = [...users.users]
        async function pushUsers(url?: string | null) {
         if(!url) return allUsers 
            const nextUsers = await getNextUsersPage(url);
            allUsers.push(...nextUsers.users)
            return allUsers
    }
  
   return pushUsers 
}



