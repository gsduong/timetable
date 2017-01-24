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
    this.timeTableService.getItems().then(items => this.timeTableItems = items);
  }

  getSubjectByTimeTableId(id: string): Subject {
    if (!this.timeTableItems) return null;
    let item = this.timeTableItems.find(item => item.getTimeTableId() === id);
    if (!item) return null;
    else return item.getSubject();
  }
  ngOnInit(){
    this.getItems();
    this.cols = COLS;
    this.rows = ROWS;
    this.days = DAY_IN_WEEK;
    this.size = SIZE;
  }
  onDrop(data: TimeTableItem){
    if (this.timeTableItems.indexOf(data) > -1 ) {
      /* Check if timetable already has this item */
    } else {
      this.timeTableItems.push(data);
      console.log("Pushed : " + JSON.stringify(data));
    }
  }

  clearTimeTable(): void {
    this.timeTableService.clearItems().then(items => this.timeTableItems = items);
  }

  saveTimeTable(): void {
    localStorage.setItem(this.timeTableService.getUsername(), JSON.stringify(this.timeTableItems));
  }
  isEmpty(id: string) : boolean {
    return this.getSubjectByTimeTableId(id) == null;
  }
}
