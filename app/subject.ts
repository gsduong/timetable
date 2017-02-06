import { Category } from "./category";
import { CATEGORYLIST } from "./category";
/**
 * Created by gsduong on 1/8/17.
 */
export class Subject {
  categoryId: number;
  id: number;
  name: string;
  isDraggable: boolean;
  constructor(_id: number, _name: string, _categoryId: number){
    this.id = _id;
    this.name = _name;
    this.categoryId = _categoryId;
    this.isDraggable = true;
  }
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }

  public getCategoryId(): number {
    return this.categoryId;
  }

  public stringify(): string {
    return JSON.stringify(this, function (key,value) {
      if (typeof value === 'function') return value.toString();
      else return value;
    })
  }
}

export const SUBJECTLIST = [
  new Subject(1, "Math", CATEGORYLIST[0].getId()),
  new Subject(2, "Physics", CATEGORYLIST[0].getId()),
  new Subject(3, "Probability", CATEGORYLIST[0].getId()),
  new Subject(4, "ITSS", CATEGORYLIST[1].getId()),
  new Subject(5, "AI", CATEGORYLIST[0].getId()),
  new Subject(6, "Machine Learning", CATEGORYLIST[0].getId()),
  new Subject(7, "Project Management", CATEGORYLIST[1].getId()),
  new Subject(8, "Graduation Research 1", CATEGORYLIST[1].getId()),
  new Subject(9, "Graduation Research 2", CATEGORYLIST[1].getId()),
  new Subject(10, "X", CATEGORYLIST[4].getId()),
  new Subject(11, "Y", CATEGORYLIST[4].getId()),
  new Subject(12, "Z", CATEGORYLIST[5].getId()),
  new Subject(13, "T", CATEGORYLIST[6].getId()),
  new Subject(14, "A", CATEGORYLIST[2].getId()),
  new Subject(15, "B", CATEGORYLIST[2].getId()),
  new Subject(16, "C", CATEGORYLIST[7].getId()),
  new Subject(17, "D", CATEGORYLIST[7].getId()),
  new Subject(18, "E", CATEGORYLIST[3].getId()),
  new Subject(19, "F", CATEGORYLIST[3].getId()),
  new Subject(20, "G", CATEGORYLIST[5].getId()),
]
