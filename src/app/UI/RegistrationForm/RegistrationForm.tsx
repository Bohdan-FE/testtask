'use client'
import { Position } from '@/lib/types'
import style from './RegistrationForm.module.scss'

function RegistrationForm({ positions }: { positions: Position[] }) {

    return (
        <form className={style.form}>

            <div className={style.inputContainer}>
                <input type="text" id="name" placeholder=' ' />
                <label htmlFor="name">Your name</label>
            </div>

            <div className={style.inputContainer}>
                <input type="email" id="email" placeholder=' ' />
                <label htmlFor="email">Email</label>
            </div>

            <div className={style.inputContainer}>
                <input type="phone" id='phone' placeholder=' ' />
                <label htmlFor="phone">Phone</label>
            </div>



            <div className={style.div}>
                <legend>Select your position</legend>
                {positions.map(position =>
                    <div key={position.id}>
                        <input type="radio" id={position.name} value={position.name} name='position' />
                        <label htmlFor={position.name}>{position.name}</label>
                    </div>)}
            </div>

            <label htmlFor="file"></label>
            <input type="file" id='file' />
        </form>
    );
}

export default RegistrationForm;