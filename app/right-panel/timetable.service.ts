import {Injectable} from "@angular/core";
import {Subject} from "../subject";
import {SIZE} from "./timetable.utils";
import {TimeTableItem} from "../TimeTableItem";
/**
 * Created by gsduong on 1/20/17.
 */

@Injectable()
export class TimeTableService {
  getUsername(): string { /* get current username */
    return localStorage.getItem('user');
  }

  getDataString(): string {
    return localStorage.getItem(this.getUsername());
  }

  getItems(): Promise<TimeTableItem[]> {
    let JSON_string = this.getDataString();
    if (JSON_string == null || JSON_string == "" || JSON_string == "[]") {
      let items: TimeTableItem[] = [];
      for (let i = 0; i < SIZE; i++) {
        items.push(new TimeTableItem());
      }

      return Promise.resolve(items);
    }
    else return Promise.resolve(JSON.parse(JSON_string));
  }

  clearItems(): Promise<TimeTableItem[]> {
    let items: TimeTableItem[] = [];
    for (let i = 0; i < SIZE; i++) {
      items.push(new TimeTableItem());
    }
    return Promise.resolve(items);
  }
}
