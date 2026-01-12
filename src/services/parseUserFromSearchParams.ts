import {IUser} from "@/models/IUser";

export function parseUserFromSearchParams (searchParams: Record<string, string | string[] | undefined>): IUser | null {
    const data = searchParams.data;
    if (typeof data !== 'string') return null;
    try {
        return JSON.parse(data) as IUser;
    } catch {
        return null;
    }
}