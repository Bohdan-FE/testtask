import { getPositions } from "@/lib/getPositions";
import RegistrationForm from "../RegistrationForm/RegistrationForm";


async function RegistrationContainer() {
    const { positions } = await getPositions()

    return (
        <div className="wrapper">
            <h1>Working with POST request</h1>
            <RegistrationForm positions={positions} />
        </div>
    );
}

export default RegistrationContainer;