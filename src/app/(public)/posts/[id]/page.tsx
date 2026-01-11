import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/models/IPost";

type Props = {
    searchParams: Promise<SearchParams>
}

const PostsPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string') {
        obj = JSON.parse(data) as IPost;
    }

    return (
        <>
            {
                obj && <div>ID. {obj.id} userId.{obj.userId}</div>
            }
            {
                obj && <div>Title: {obj.title} Body: {obj.body}</div>
            }

        </>
    );
};

export default PostsPage;