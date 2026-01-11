import React from 'react';
import PostComponent from "@/components/posts/PostComponent";
import {getAllPosts} from "@/services/comments";

const PostsComponent = async () => {
    const posts = await getAllPosts();
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;