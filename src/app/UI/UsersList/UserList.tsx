'use client'
import { User } from "@/lib/types"
import { useContext, useEffect, useRef, useState } from "react"
import style from './UserList.module.scss'
import UserCard from "../UserCard/UserCard"
import { ShowMoreBtn } from "../Buttons/Buttons"
import { useLayoutEffect } from 'react';
import { usersContext } from "@/app/context"
import Spinner from "../Spinner/Spinner"

function UserList() {
    const { usersData, setUsersData } = useContext(usersContext)
    const [newUsers, setNewUsers] = useState<User[]>([])
    const [url, setUrl] = useState<string>('')
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [maxLength, setMaxLength] = useState<number>(39)
    const [isLoading, setIsLoading] = useState(false)
    const ulRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        if (!usersData) return
        setNewUsers(usersData.users)
        setUrl(usersData.links.next_url)
        setIsDisabled(usersData.page === usersData.total_pages)
    }, [usersData])

    const showMoreHandler = async (): Promise<void> => {
        try {
            setIsLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            const { users, links: { next_url }, page, total_pages } = data
            setNewUsers(prev => [...prev, ...users])
            setUrl(next_url)
            console.log(next_url)
            if (total_pages === page) {
                setIsDisabled(true)
                return
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useLayoutEffect(() => {
        const handleResize = () => {
            const ulWidth = ulRef.current?.offsetWidth
            if (!ulWidth) return
            if (ulWidth < 1170) {
                const newMaxLength = Math.round(ulWidth / 33)
                setMaxLength(newMaxLength)
            }
            if (ulWidth > 1169) setMaxLength(39)
        };
        const resizeObserver = new ResizeObserver(handleResize);
        if (ulRef.current) {
            resizeObserver.observe(ulRef.current);
        }
        return () => {
            if (ulRef.current) {
                resizeObserver.unobserve(ulRef.current);
            }
        };
    }, []);

    if (!usersData) {
        return <Spinner />
    }

    return (
        <>
            <ul ref={ulRef} className={style.userList}>
                {newUsers.map(user => <UserCard key={user.id} user={user} maxLength={maxLength} />)}
            </ul>
            {isLoading && <Spinner />}
            <ShowMoreBtn showMoreHandler={showMoreHandler} disabled={isDisabled} />
        </>
    );
}

export default UserList;