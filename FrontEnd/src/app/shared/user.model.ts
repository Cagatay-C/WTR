import { Book } from "./book.model";

export class User {
  id?: number;
  userName: string;
  userPass: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  token?: string;
  books?: Book[];
}
