import {Component, OnInit} from "@angular/core";
import any = jasmine.any;
import {ListService} from "./list.service";
import {Category} from "../category";
import {Subject} from "../subject";
import { MakeDraggable } from "./draggable.directive";

@Component({
  selector: 'left-panel',
  templateUrl: 'app/left-panel/left-panel.component.html',
  styleUrls: ['app/left-panel/left-panel.component.css']
})

export class LeftPanelComponent implements OnInit {
  title = '';
  query = '';
  items : Array<any>;
  selectedItem : any;
  status : number;
  draggable: boolean;
  constructor(private listService: ListService){ }

  getCategories(): void {
    this.listService.getCategories().then(categories => this.items = categories);
    this.draggable = false;
  }
  getSubjectsByCategoryId(category_id: number): void {
    this.listService.getSubjectsByCategoryId(category_id).then(subjects => this.items = subjects);
    this.status = 2;
    this.title = "Subject";
    this.draggable = true;
  }
  getSubjects(): void {
    this.listService.getSubjects().then(subjects => this.items = subjects);
  }
  ngOnInit(): void {
    this.getCategories();
    this.title = "Category";
    this.status = 1;
    this.draggable = false;
  }

  onSelect(item: any): void {
    console.log("onSelect()");
    if (item instanceof Category) {
      console.log("OnCategorySelect");
      this.selectedItem = item;
      this.getSubjectsByCategoryId(item.getId());
    }
  }
  onBack(): void {
    this.getCategories();
    this.title = "Category";
    this.status = 1;
  }
  onSubjectsSelect(): void {
    this.getSubjects();
    this.title = "Subject";
    this.status = 2;
  }
  onSearchSelect(): void {
    this.status = 3;
    this.getSubjects();
  }
  onKey(event:any) {
    this.query = event.target.value;
    this.listService.onQueryUpdate(this.query)
      .then(subjects => this.items = subjects);
    console.log(this.items);
  }
}
