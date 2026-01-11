import {getAllUsers} from "@/services/users";
import Link from "next/link";

const UsersPage = async () => {
    const users = await getAllUsers();
    console.log(users);


    return (
        <div>
            <h1>Users List:</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>

                ))}
            </ul>
        </div>
    );
};
export default UsersPage;