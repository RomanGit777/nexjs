import {IComments} from "@/models/IComments";
import {baseUrl} from "@/services/base";

export const getComments = async (): Promise<IComments[]> => {
    const res = await fetch(baseUrl + "/comments", {cache: "no-store"});
    if (!res.ok) throw new Error("Error: Could not fetch comments");
    return res.json();
}