import {FC} from "react";
import {parseUserFromSearchParams} from "@/services/parseDataFromSearchParams";

type Props = { searchParams: Promise<Record<string, string>> };
const UserIdPage: FC<Props> = async ({searchParams}) => {

    const params = await searchParams;
    const user = parseUserFromSearchParams(params)
    return (
        <div>
            {user &&
                <div>{user.id}
                    {user.name}</div>}
        </div>
    );
};
export default UserIdPage;