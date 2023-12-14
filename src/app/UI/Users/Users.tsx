'use client'


import { User } from "@/lib/types";
import UserCard from "../UserCard/UserCard";
import style from './User.module.scss'
import { useEffect, useState } from "react";


function Users() {
    const [users, setUsers] = useState<User[]>([])
    const [url, setUrl] = useState<string | null>('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')

    useEffect(() => {
        async function getUsers(url: string) {
            try {
                const responce = await fetch(url)
                const data = await responce.json()
                setUsers(prevState => [...prevState, ...data.users])
            } catch (error) {
                console.log(error)
            }
        }
        if (!url) return
        getUsers(url)
    }, [url])

    return (
        <div className="wrapper">
            <h1 className={style.userTitle}>Working with GET request</h1>
            <ul>
                {users.map(user => <UserCard key={user.id} user={user} />)}
            </ul>
        </div>
    );
}

export default Users;