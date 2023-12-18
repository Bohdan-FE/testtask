import { getPositions } from "@/lib/getPositions";

import RegistrationContainer from "../RegistrationContainer/RegistrationContainer";

async function RegistrationSection() {
    const { positions } = await getPositions()

    return (
        <section>
            <RegistrationContainer positions={positions} />
        </section>
    );
}

export default RegistrationSection;