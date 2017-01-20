/**
 * Created by gsduong on 1/4/17.
 */
import {Component, OnInit} from "@angular/core";
import { MakeDroppable } from "./droppable.directive";
import {TimeTableService, TimeTable} from "./timetable.service";
import { ROWS, COLS, DAY_IN_WEEK } from "./timetable.utils";
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
  public timeTable: TimeTable;

  constructor(private timeTableService: TimeTableService){}

  ngOnInit(){
    this.timeTable = this.timeTableService.getSubjects();
    this.cols = COLS;
    this.rows = ROWS;
    this.days = DAY_IN_WEEK;
  }

  onDrop(data:any){
    console.log(JSON.stringify(data));
    // alert(JSON.stringify(data));
  }
}
