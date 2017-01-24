import { Category } from "./category";
import { CATEGORYLIST } from "./category";
/**
 * Created by gsduong on 1/8/17.
 */
export class Subject {
  category: Category;
  id: number;
  name: string;
  isDraggable: boolean;
  constructor(_id: number, _name: string, _category: Category){
    this.id = _id;
    this.name = _name;
    this.category = _category;
    this.isDraggable = true;
  }
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }

  public getCategory(): Category {
    return this.category;
  }
}

export const SUBJECTLIST = [
  new Subject(1, "Math", CATEGORYLIST[0]),
  new Subject(2, "Physics", CATEGORYLIST[0]),
  new Subject(3, "Probability", CATEGORYLIST[0]),
  new Subject(4, "ITSS", CATEGORYLIST[1]),
  new Subject(5, "AI", CATEGORYLIST[0]),
  new Subject(6, "Machine Learning", CATEGORYLIST[0]),
  new Subject(7, "Project Management", CATEGORYLIST[1]),
  new Subject(8, "Graduation Research 1", CATEGORYLIST[1]),
  new Subject(9, "Graduation Research 2", CATEGORYLIST[1]),
  new Subject(10, "X", CATEGORYLIST[4]),
  new Subject(11, "Y", CATEGORYLIST[4]),
  new Subject(12, "Z", CATEGORYLIST[5]),
  new Subject(13, "T", CATEGORYLIST[6]),
  new Subject(14, "A", CATEGORYLIST[2]),
  new Subject(15, "B", CATEGORYLIST[2]),
  new Subject(16, "C", CATEGORYLIST[7]),
  new Subject(17, "D", CATEGORYLIST[7]),
  new Subject(18, "E", CATEGORYLIST[3]),
  new Subject(19, "F", CATEGORYLIST[3]),
  new Subject(20, "G", CATEGORYLIST[5]),
]
