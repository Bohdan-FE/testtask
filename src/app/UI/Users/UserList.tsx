'use client'
import { User } from "@/lib/types"
import { useEffect, useRef, useState } from "react"
import style from './User.module.scss'
import UserCard from "../UserCard/UserCard"
import { ShowMoreBtn } from "../Buttons/Buttons"

function UserList({ users, nextUrl }: { users: User[], nextUrl: string }) {
    const [newUsers, setNewUsers] = useState<User[]>([])
    const [url, setUrl] = useState<string | null>(nextUrl)
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
            if (!url) {
                setIsDisabled(true)
                return
            }
            const response = await fetch(url)
            const data = await response.json()
            const { users, links: { next_url } } = data
            setNewUsers(prev => [...prev, ...users])
            setUrl(next_url)
        } catch (error) {
            console.log(error)
        }
    }
    // if (ulRef.current) window.scrollTo(0, ulRef.current.offsetHeight * 2)
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