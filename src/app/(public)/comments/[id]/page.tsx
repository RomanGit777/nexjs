import {FC} from "react";
import {parseDataFromSearchParams} from "@/services/parseDataFromSearchParams";
import {IComments} from "@/models/IComments";

type CommentPageProps = {searchParams: Promise<Record<string, string>>}
const CommentPage: FC<CommentPageProps> = async ({searchParams}) => {
   const params = await searchParams;
   const comment: IComments | null = parseDataFromSearchParams(params);

    return (
        <div>{comment && <div>{comment.id} {comment.name}</div> }</div>
    );
};
export default CommentPage;