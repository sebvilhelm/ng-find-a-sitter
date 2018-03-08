import { Person } from './person';

export class Sitter extends Person {
  public gender: String;
  public rate: Number;
  public workAreas: String[];
  public isAdmin: Boolean
}