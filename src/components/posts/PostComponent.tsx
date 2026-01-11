import React from 'react';
import {IPost} from "@/models/IPost";
import Link from "next/link";

interface PostComponentProps {
    post: IPost
}

const PostComponent = ({post}: PostComponentProps) => {
    return (
        <div>
            <Link href={{pathname: '/posts/' + post.id.toString(), query: {data: JSON.stringify(post)}}}>{post.id}. {post.title}</Link>
        </div>
    );
};

export default PostComponent;