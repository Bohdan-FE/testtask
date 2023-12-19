'use client'

import SuccessRegistration from "../SuccessRegistration/SuccessRegistration";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import style from './Seciton.module.scss'
import { useState } from "react";


function RegistrationSection() {
    const [isRegistered, setIsRegistered] = useState(false)

    const changeRegistrationState = (): void => {
        setIsRegistered(!isRegistered)
    }

    return (
        <section className={style.registerSection} id='register-section'>
            <div className="wrapper">
                {isRegistered ? <SuccessRegistration /> : <RegistrationForm changeRegistrationState={changeRegistrationState} />}
            </div>
        </section>
    );
}

export default RegistrationSection;