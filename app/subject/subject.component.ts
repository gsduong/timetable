/**
 * Created by gsduong on 1/20/17.
 */
import {Component, OnInit, Input} from "@angular/core";
import {Subject} from "../subject";
@Component({
  selector: 'subject',
  templateUrl: 'app/subject/subject.component.html',
  styleUrls: ['app/subject/subject.component.css']
})

export class SubjectComponent implements OnInit {
  @Input() subject: Subject;

  constructor(){  }

  ngOnInit(){}

}
