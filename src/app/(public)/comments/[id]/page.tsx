import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IComments} from "@/models/IComments";

type Props = {
    searchParams: Promise<SearchParams>
}
const CommentsPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if(typeof data === 'string') {
        obj = JSON.parse(data) as IComments;
    }
    return (
        <div>
            {
                obj && <div>{obj.id} {obj.email}</div>
            }
        </div>
    );
};

export default CommentsPage;