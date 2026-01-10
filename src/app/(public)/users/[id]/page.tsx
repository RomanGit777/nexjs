import {FC} from "react";
type Props = { params: { id: string } };
const UsersIdPage: FC<Props> = async ({params}: Props) => {
    const {id} = await params;
    return (
        <div>
            users page content {id}
        </div>
    );
};
export default UsersIdPage;