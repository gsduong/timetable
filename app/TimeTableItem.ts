import {Subject} from "./subject";
/**
 * Created by gsduong on 1/23/17.
 */
export class TimeTableItem {
  public subject: Subject;
  public timeTableId: string; /* id to identify position of subject in timetable */
  constructor () {
    this.subject = null;
    this.timeTableId = "";
  }
  setSubject(s: Subject): void {
    this.subject = s;
  }
  setTimeTableId(id: string): void {
    this.timeTableId = id;
  }
  getSubject(): Subject {
    return this.subject;
  }
  getTimeTableId(): string {
    return this.timeTableId;
  }
}
