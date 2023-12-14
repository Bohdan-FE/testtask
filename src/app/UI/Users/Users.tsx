import style from './User.module.scss'
import { getUsers } from "@/lib/getUsers";
import UserList from "./UserList";


async function Users() {
    const data = await getUsers(3, 6)
    const { users, links: { next_url } } = data

    return (
        <div className="wrapper">
            <h1 className={style.userTitle}>Working with GET request</h1>
            <UserList users={users} nextUrl={next_url} />
        </div>
    );
}

export default Users;