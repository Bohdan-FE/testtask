'use client'
import { User } from "@/lib/types"
import { useEffect, useRef, useState } from "react"
import style from './User.module.scss'
import UserCard from "../UserCard/UserCard"
import { ShowMoreBtn } from "../Buttons/Buttons"
import { useLayoutEffect } from 'react';

function UserList({ users, nextUrl, total_pages }: { users: User[], nextUrl: string, total_pages: number }) {
    const [newUsers, setNewUsers] = useState<User[]>([])
    const [page, setPage] = useState<number>(1)
    const [url, setUrl] = useState<string>(nextUrl)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [maxLength, setMaxLength] = useState<number>(39)
    const ulRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
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

    const showMoreHandler = async (): Promise<void> => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            const { users, links: { next_url }, page } = data
            setNewUsers(prev => [...prev, ...users])
            setUrl(next_url)
            setPage(page)
            console.log(next_url)
            if (total_pages === page) {
                setIsDisabled(true)
                return
            }
        } catch (error) {
            console.log(error)
        }
    }

    useLayoutEffect(() => {
        if (newUsers.length !== 0 && ulRef?.current) {
            const ulBottom = ulRef.current.offsetHeight + 200

            window.scrollTo({
                top: ulBottom,
                behavior: 'smooth',
            });
        }
    }, [newUsers, ulRef])


    if (!newUsers || !users) return
    return (
        <>
            <ul ref={ulRef} className={style.userList}>
                {users.map(user => <UserCard key={user.id} user={user} maxLength={maxLength} />)}
                {newUsers.map(user => <UserCard key={user.id} user={user} maxLength={maxLength} />)}
            </ul>
            <ShowMoreBtn showMoreHandler={showMoreHandler} disabled={isDisabled} />
        </>
    );
}

export default UserList;