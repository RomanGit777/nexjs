import {FC} from "react";
import {parsePostFromSearchParams} from "@/services/parseDataFromSearchParams";
type PostPageProps = {
    searchParams: Promise<Record<string, string>>;
}
const PostPage: FC<PostPageProps> = async ({searchParams}) => {
    const params = await searchParams;
    const post = parsePostFromSearchParams(params)

    return (
        <div>
            {post && <div>{post.id} {post.title}</div> }
        </div>
    );
};
export default PostPage;