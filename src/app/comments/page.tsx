import {getComments} from "@/services/comments";

const CommentsPage = async () => {
    const comments = await getComments();
    return (
        <ul>
            {comments.map((c) => (
            <li key={c.id}>
                <p><b>PostId:</b> {c.postId}</p>
                <p><b>Id:</b> {c.id}</p>
                <p><b>Name:</b> {c.name}</p>
                <p><b>Email:</b> {c.email}</p>
                <p><b>Body:</b> {c.body}</p>
            </li>))}
        </ul>
    );
};
export default CommentsPage;