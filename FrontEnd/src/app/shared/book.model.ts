import { User } from "./user.model";

export class Book {
  public bookName: string;
  public bookDesc: string;
  public bookUrl: string;
  public users: User[];
}
