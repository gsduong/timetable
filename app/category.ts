import {variable} from "@angular/compiler/src/output/output_ast";
export class Category {
  name: string;
  id: number;
  constructor(_id: number, _name: string){
    this.id = _id;
    this.name = _name;
  }
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
}

export const CATEGORYLIST = [
  new Category(1, "Computer Science"),
  new Category(2, "Software Engineering"),
  new Category(3, "Information Security"),
  new Category(4, "Multimedia"),
  new Category(5, "A"),
  new Category(6, "B"),
  new Category(7, "C"),
  new Category(8, "D"),
  new Category(9, "E"),
  new Category(10, "F"),
  new Category(11, "G"),
  new Category(12, "H"),
]
