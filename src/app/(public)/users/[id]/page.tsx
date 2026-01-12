import {FC} from "react";
import {parseDataFromSearchParams} from "@/services/parseDataFromSearchParams";
import {IUser} from "@/models/IUser";

type Props = { searchParams: Promise<Record<string, string>> };
const UserIdPage: FC<Props> = async ({searchParams}) => {

    const params = await searchParams;
    const user: IUser | null = parseDataFromSearchParams(params)
    return (
        <div>
            {user &&
                <div>{user.id}
                    {user.name}</div>}
        </div>
    );
};
export default UserIdPage;