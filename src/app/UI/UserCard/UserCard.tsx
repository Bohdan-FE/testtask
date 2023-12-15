'use client'
import { User } from '@/lib/types';
import Image from 'next/image'
import style from './UserCard.module.scss'
import defaultPhoto from '../../../../public/photo-cover.svg'
import { useState } from 'react';



function UserCard({ user, maxLength }: { user: User, maxLength: number }) {
    const { photo, name, email, phone, position } = user
    const [src, setSrc] = useState(photo)

    function truncateText(text: string, maxLength: number): string {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <li className={style.userCard}>
            <Image width={70} height={70} src={src} alt={name} onError={e => setSrc(defaultPhoto)} />
            <p>{truncateText(name, maxLength)}</p>
            <div>
                <p>{position}</p>
                <a href={`mailto:${email}`}>{truncateText(email, maxLength)}
                    <span>{email}</span>
                </a>
                <a href={`tel:${phone}`}>{truncateText(phone, maxLength)}
                    <span>{phone}</span>
                </a>
            </div>
        </li>);
}

export default UserCard;