import { UserType } from "../types/auth";
import instance from "./instance";

export const add = (user: UserType) => {
    const url = '/users';
    return instance.post(url, user)
}