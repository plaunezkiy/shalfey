// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
// Define a role enum
export enum Role {
  customer = "customer",
  moderator = "moderator",
  vendor = "vendor",
}
// common interface for JWT and Session
interface IUser extends DefaultUser {
  role?: Role;
}
declare module "next-auth" {
  interface User extends IUser {}
  interface Session {
    user?: User;
    access?: string;
    refresh?: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}