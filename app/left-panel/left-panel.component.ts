import {Component, OnInit} from "@angular/core";
import any = jasmine.any;
import {ListService} from "./list.service";
import {Category} from "../category";

@Component({
  selector: 'left-panel',
  template: `
    <span><button type="button" class="btn btn-default btn-xs" *ngIf="status === 2" (click)="onBack()">Back</button><h1 style="text-align: center;">{{title}}</h1></span>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of items" (click)="onSelect(item)" [class.selected]="item === selectedItem">
        <h4 class="list-group-item-heading">{{item.getName()}}</h4>
        <p class="list-group-item-text">{{item.getName()}}</p>
      </li>
    </ul>
  `,
  styleUrls: ['app/left-panel/left-panel.component.css']
})

export class LeftPanelComponent implements OnInit {
  title = '';
  items : Array<any>;
  selectedItem : any;
  status : number;
  constructor(private listService: ListService){ }

  getCategories(): void {
    this.listService.getCategories().then(categories => this.items = categories);
  }
  getSubjectsByCategoryId(category_id: number): void {
    this.listService.getSubjectsByCategoryId(category_id).then(subjects => this.items = subjects);
    this.status = 2;
    this.title = "Subject";
  }
  ngOnInit(): void {
    this.getCategories();
    this.title = "Category";
    this.status = 1;
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
}
