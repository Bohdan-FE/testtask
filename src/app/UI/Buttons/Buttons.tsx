'use client'

import { getAllUsers } from '@/lib/getUsers';
import style from './Buttons.module.scss'


export function LinkButton({ title, href }: {
    title: string, href: string
}) {
    return (
        <a href={href} className={style.linkBtn}>
            {title}
        </a>
    );
}

export function ShowMoreBtn({ handler }) {

    return (
        <button onClick={() => handler()}>Showe more</button>
    );
}



