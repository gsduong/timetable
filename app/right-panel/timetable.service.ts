import {Injectable} from "@angular/core";
import {Subject} from "../subject";
/**
 * Created by gsduong on 1/20/17.
 */

export class TimeTable {
  mon: Subject[];
  tue: Subject[];
  wed: Subject[];
  thu: Subject[];
  fri: Subject[];
}

@Injectable()
export class TimeTableService {
  getUsername(): string {
    return localStorage.getItem('user');
  }

  getDataString(): string {
    return localStorage.getItem(this.getUsername());
  }

  getSubjects(): TimeTable {
    let JSON_string = this.getDataString();
    if (JSON_string == null) return new TimeTable();
    else return JSON.parse(JSON_string);
  }
}
