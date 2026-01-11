import {IUser} from "@/models/IUser";

export const getAllUsers = (): Promise<IUser[]> => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json());
}