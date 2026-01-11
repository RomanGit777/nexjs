import React from 'react';
import UserComponent from "@/components/users/UserComponent";
import {getAllUsers} from "@/services/comments";

const UsersComponent = async () => {

    const users = await getAllUsers();

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;