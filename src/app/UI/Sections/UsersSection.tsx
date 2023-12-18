'use Client'
import UserList from '../UsersList/UserList';
import style from './Seciton.module.scss'
import { getUsers } from "@/lib/getUsers";



function UsersSection() {

    return (
        <section>
            <div className={"wrapper " + style.usersContainer}>
                <h1 className={style.userTitle}>Working with GET request</h1>
                <UserList />
            </div>
        </section>

    );
}

export default UsersSection;