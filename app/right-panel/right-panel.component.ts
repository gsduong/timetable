/**
 * Created by gsduong on 1/4/17.
 */
import {Component, OnInit} from "@angular/core";
import { MakeDroppable } from "./droppable.directive";
import {TimeTableService} from "./timetable.service";
import {ROWS, COLS, DAY_IN_WEEK, SIZE} from "./timetable.utils";
import {TimeTableItem} from "../TimeTableItem";
import {Subject} from "../subject";
@Component({
  selector: 'right-panel',
  templateUrl: 'app/right-panel/right-panel.component.html',
  styleUrls: ['app/right-panel/right-panel.component.css']
})

export class RightPanelComponent implements OnInit {
  public title = 'Time Table';
  cols: Array<any>;
  rows: Array<any>;
  days: Array<any>;
  size: number;
  public timeTableItems: TimeTableItem[];

  constructor(private timeTableService: TimeTableService){}

  getItems(): void {
    this.timeTableItems = this.timeTableService.getItems();
  }

  getSubjectByTimeTableId(id: string): Subject {

    if (!this.timeTableItems) return null;
    var item = this.timeTableItems.find(function (e: TimeTableItem){
      if (!e) return false;
      else {
        return e.timeTableId == id;
      }
    });

    if (!item) return null;
    else return item.subject;
  }
  ngOnInit(){
    this.getItems();
    this.cols = COLS;
    this.rows = ROWS;
    this.days = DAY_IN_WEEK;
    this.size = SIZE;
  }
  onDrop(data: TimeTableItem){
    /* check if a cell with the same timetable id existed */
    let cell = this.timeTableItems.find(function (e: TimeTableItem) {
      if (!e) {

        return false;
      }
      else {
        return e.timeTableId == data.getTimeTableId();
      }
    });
    if (!cell) {
      /* if not exist, push */

      this.timeTableItems.push(data);
    } else {
      /* if exists, delete and push */

      let index = this.timeTableItems.indexOf(cell);
      this.timeTableItems[index].subject = data.getSubject();

    }

  }

  clearTimeTable(): void {
    this.timeTableItems = this.timeTableService.initData();

  }

  saveTimeTable(): void {
    localStorage.removeItem(this.timeTableService.getUsername());
    localStorage.setItem(this.timeTableService.getUsername(), JSON.stringify(this.timeTableItems));
  }
  isEmpty(id: string) : boolean {
    return this.getSubjectByTimeTableId(id) == null;
  }
  clearLocalStorage(): void {
    this.timeTableService.clearLocalStorage();
  }
}

