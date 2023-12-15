'use client'
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

export function ShowMoreBtn({ showMoreHandler, disabled }: {
    disabled: boolean, showMoreHandler: () => Promise<void>
}) {

    return (
        <button className={style.btn} onClick={() => showMoreHandler()} disabled={disabled}>Show more</button>
    );
}



