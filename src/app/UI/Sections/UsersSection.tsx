'use Client'
import UserList from '../UsersList/UserList';
import style from './Seciton.module.scss'

function UsersSection() {
    return (
        <section className={style.userSection} id='users-section'>
            <div className={"wrapper"}>
                <div className={style.usersContainer} >
                    <h2 className='title'>Working with GET request</h2>
                    <UserList />
                </div>
            </div>
        </section>

    );
}

export default UsersSection;