import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";

export function parseUserFromSearchParams (searchParams: Record<string, string | string[] | undefined>): IUser | null {
    const data = searchParams.data;
    if (typeof data !== 'string') return null;
    try {
        return JSON.parse(data) as IUser;
    } catch {
        return null;
    }
}

export function parsePostFromSearchParams (searchParams: Record<string, string | string[] | undefined>): IPost | null {
    const data = searchParams.data;
    if (typeof data !== 'string') return null;
    try {
        return JSON.parse(data) as IPost;
    } catch {
        return null;
    }
}