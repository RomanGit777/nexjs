import {FC} from "react";
import {parseDataFromSearchParams} from "@/services/parseDataFromSearchParams";
import {IPost} from "@/models/IPost";
type PostPageProps = {
    searchParams: Promise<Record<string, string>>;
}
const PostPage: FC<PostPageProps> = async ({searchParams}) => {
    const params = await searchParams;
    const post: IPost | null = parseDataFromSearchParams(params)

    return (
        <div>
            {post && <div>{post.id} {post.title}</div> }
        </div>
    );
};
export default PostPage;