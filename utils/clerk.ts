import { currentUser } from "@clerk/nextjs/server";

export interface IUser {
  email: string;
  username?: string;
  avatar: string;
}

export const getUserData = (): IUser => {
  const user = currentUser();

  return { email: "asas", username: "adaw", avatar: "adaw" };
};
