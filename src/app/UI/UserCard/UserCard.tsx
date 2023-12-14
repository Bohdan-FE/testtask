'use client'
import { User } from '@/lib/types';
import Image from 'next/image'
import style from './UserCard.module.scss'


function UserCard({ user }: { user: User }) {
    const { photo, name, email, phone, position } = user

    function truncateText(text: string) {
        if (text.length > 30) {
            return text.substring(0, 41) + '...';
        }
        return text;
    }

    return (
        <li className={style.userCard}>
            <Image width={70} height={70} src={photo} alt={name} />
            <p>{truncateText(name)}</p>
            <div>
                <p>{position}</p>
                <a href={`mailto:${email}`}>{truncateText(email)}
                    <span>{email}</span>
                </a>
                <a href={`tel:${phone}`}>{truncateText(phone)}
                    <span>{phone}</span>
                </a>
            </div>
        </li>);
}

export default UserCard;