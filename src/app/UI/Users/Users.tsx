import style from './User.module.scss'
import { getUsers } from "@/lib/getUsers";
import UserList from "./UserList";


async function Users() {
    const data = await getUsers(1, 6)
    const { users, links: { next_url }, total_pages } = data

    return (
        <div className={"wrapper " + style.usersContainer}>
            <h1 className={style.userTitle}>Working with GET request</h1>
            <UserList users={users} nextUrl={next_url} total_pages={total_pages} />
        </div>
    );
}

export default Users;