import { Rating } from "./rating";

export class Person {
  public customerId?: String;
  public _id?: String;
  public id: String;
  public userName: String;
  public firstName: String;
  public lastName: String;
  public birthDate: Date;
  public area: String;
  public rating: Rating[];
}