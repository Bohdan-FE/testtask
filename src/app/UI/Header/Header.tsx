import { useContext, useEffect, useState } from "react";
import { LinkButton } from "../Buttons/Buttons";
import Logo from "../Logo";
import style from './Header.module.scss'
import { usersContext } from "@/app/context";
import { getUserById } from "@/lib/getUserById";

function Header() {
    const { registerData } = useContext(usersContext)
    const [userName, setName] = useState<string>('')

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await getUserById(registerData.user_id)
                if (user?.success) setName(user.user.name)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [registerData])

    return (
        <header className={style.header}>
            <div className={style.topHeader}></div>

            <div className={style.bottomHeader}>
                <div className={style.menu}>
                    <Logo />
                    {!registerData?.success ? <nav className={style.nav}>
                        <LinkButton href='#users-section' title='Users' />
                        <LinkButton href='#register-section' title='Sign up' />
                    </nav> : <p>{`Welcome ${userName}!`}</p>}

                </div>
            </div>
        </header>
    );
}

export default Header;