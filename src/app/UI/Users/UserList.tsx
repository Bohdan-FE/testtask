'use client'
import { User } from "@/lib/types"
import { useEffect, useState } from "react"
import style from './User.module.scss'
import UserCard from "../UserCard/UserCard"

function UserList({ users, nextUrl }: { users: User[], nextUrl: string | null }) {
    const [newUsers, setNewUsers] = useState<User[]>([])
    const [url, setUrl] = useState<string | null>(null)

    useEffect(() => {
        async function getUsers(url: string) {
            try {
                const responce = await fetch(url)
                const data = await responce.json()
                setNewUsers(prevState => [...prevState, ...data.users])
            } catch (error) {
                console.log(error)
            }
        }
        if (!url) return
        getUsers(url)
    }, [url])

    return (
        <>
            <ul className={style.userList}>
                {users.map(user => <UserCard key={user.id} user={user} />)}
                {newUsers.map(user => <UserCard key={user.id} user={user} />)}
            </ul>
        </>
    );
}

export default UserList;