import {Injectable} from "@angular/core";
import {Subject} from "../subject";
import {SIZE, DAY_IN_WEEK, ROWS} from "./timetable.utils";
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
    let dataString = localStorage.getItem(this.getUsername());
    if (!dataString) {
      console.log("data is empty");
      return null;
    }
    else {
      console.log("data is ready ");
      return dataString;
    }
  }

  initData(): TimeTableItem[] {
    let items: TimeTableItem[] = [];
    let item: TimeTableItem;
    for (let day of DAY_IN_WEEK) {
      for (let row of ROWS) {
        item = new TimeTableItem();
        item.setTimeTableId(day + row);
        items.push(item);
      }
    }

    return items;
  }

  getItems(): TimeTableItem[] {
    let JSON_string = this.getDataString();
    if (!JSON_string) {
      return this.initData();
    }
    else {
      return JSON.parse(JSON_string);
    }
  }

  clearLocalStorage(): void {
    /* clear table data of user */
    localStorage.removeItem(this.getUsername());
  }
}
