'use client'
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { Position } from "@/lib/types";
import { useState } from "react";
import SuccessRegistration from "../SuccessRegistration/SuccessRegistration";


function RegistrationContainer({ positions }: {
    positions: Position[]
}) {
    const [isRegistered, setIsRegistered] = useState(false)

    const changeRegistrationState = (): void => {
        setIsRegistered(true)
    }

    return (
        <div className="wrapper">
            {isRegistered ? <SuccessRegistration /> : <RegistrationForm positions={positions} changeRegistrationState={changeRegistrationState} />}
        </div>
    );
}

export default RegistrationContainer;