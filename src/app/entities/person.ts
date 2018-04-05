import { Rating } from "./rating";

export class Person {
  public id: String;
  public userName: String;
  public firstName: String;
  public lastName: String;
  public birthDate: Date;
  public area: String;
  public rating: Rating[];
}