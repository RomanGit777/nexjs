import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComments} from "@/models/IComments";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = async (): Promise<IUser[]> => {
    return await fetch(BASE_URL + '/users')
        .then((response) => response.json())
};

export const getAllPosts = async (): Promise<IPost[]> => {
    return await fetch(BASE_URL + '/posts')
        .then((response) => response.json())
};

export const getAllComments = async (): Promise<IComments[]> => {
    return await fetch(BASE_URL + '/comments')
        .then((response) => response.json())
};