'use client'
import { useState } from "react";
import SuccessRegistration from "../SuccessRegistration/SuccessRegistration";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

function RegistrationSection() {
    const [isRegistered, setIsRegistered] = useState(false)

    const changeRegistrationState = (): void => {
        setIsRegistered(true)
    }

    return (
        <section>
            <div className="wrapper">
                {isRegistered ? <SuccessRegistration /> : <RegistrationForm changeRegistrationState={changeRegistrationState} />}
            </div>
        </section>
    );
}

export default RegistrationSection;