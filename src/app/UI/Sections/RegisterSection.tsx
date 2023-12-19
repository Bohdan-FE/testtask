'use client'

import SuccessRegistration from "../SuccessRegistration/SuccessRegistration";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import style from './Seciton.module.scss'
import { useContext, useState } from "react";
import { usersContext } from "@/app/context";


function RegistrationSection() {
    const { registerData } = useContext(usersContext)

    return (
        <section className={style.registerSection} id='register-section'>
            <div className="wrapper">
                {registerData?.success ? <SuccessRegistration /> : <RegistrationForm />}
            </div>
        </section>
    );
}

export default RegistrationSection;