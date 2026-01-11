import CommentComponent from "@/components/comments/CommentComponent";
import {getAllComments} from "@/services/comments";

const CommentsComponent = async () => {
    const comments = await getAllComments();
    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;