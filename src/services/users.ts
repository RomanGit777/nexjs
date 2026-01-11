import {IUser} from "@/models/IUser";
import {baseUrl} from "@/services/base";

export async function getAllUsers(): Promise<IUser[]> {
    const res = await fetch(`${baseUrl}/users`);
    if (!res.ok) throw new Error(`Failed to fetch users`);
    return res.json();
}

export async function getUserById(id: string): Promise<IUser> {
    const res = await fetch(`${baseUrl}/users/${id}`);
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
}