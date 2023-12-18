import UserList from '../UsersList/UserList';
import style from './Seciton.module.scss'
import { getUsers } from "@/lib/getUsers";



async function UsersSection() {
    const data = await getUsers(1, 6)
    const { users, links: { next_url }, total_pages, page } = data

    return (
        <section>
            <div className={"wrapper " + style.usersContainer}>
                <h1 className={style.userTitle}>Working with GET request</h1>
                <UserList users={users} nextUrl={next_url} total_pages={total_pages} page={page} />
            </div>
        </section>

    );
}

export default UsersSection;