import {getAllUsers} from "@/services/api.services";
import Link from "next/link";

const UsersPage = async () => {
    const users = await getAllUsers();

    return (
        <div>{users.map(u => (
            <div key={u.id}> <Link href={'/users/'+u.id}>{u.name} {u.email}</Link></div>
        ))}</div>
    );
};
export default UsersPage;