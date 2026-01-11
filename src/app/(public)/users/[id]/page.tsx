import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

type Props = {
    searchParams: Promise<SearchParams>
}
const UserPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string') {
        obj = JSON.parse(data) as IUser;
    }
    return (
        <div>
            {
                obj && <div>{obj.id} {obj.name} {obj.email}</div>
            }
        </div>
    );
};

export default UserPage;