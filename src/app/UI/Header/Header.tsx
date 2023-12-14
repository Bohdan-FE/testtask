import { LinkButton } from "../Buttons/Buttons";
import Logo from "../Logo";
import style from './Header.module.scss'

function Header() {
    return (
        <header className={style.header}>
            <div className={style.topHeader}></div>
            <div className={style.bottomHeader}>
                <div className={style.menu + ' wrapper'}>
                    <Logo />
                    <nav className={style.nav}>
                        <LinkButton href='#users-section' title='Users' />
                        <LinkButton href='' title='Sign up' />
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;