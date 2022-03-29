import { UserType } from "../types/auth";
import instance from "./instance";

export const signup = (user: UserType) => {
    const url = '/users';
    return instance.post(url, user)
}