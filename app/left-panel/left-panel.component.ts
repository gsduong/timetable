import {Component} from "@angular/core";

@Component({
  selector: 'left-panel',
  template: `
    <h1 style="text-align: center;">{{title}}</h1>
    <div class="list-group">
      <a href="#" class="list-group-item active">
        <h4 class="list-group-item-heading">First List Group Item Heading</h4>
        <p class="list-group-item-text">List Group Item Text</p>
      </a>
      <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">Second List Group Item Heading</h4>
        <p class="list-group-item-text">List Group Item Text</p>
      </a>
      <a href="#" class="list-group-item">
        <h4 class="list-group-item-heading">Third List Group Item Heading</h4>
        <p class="list-group-item-text">List Group Item Text</p>
      </a>
    </div>
  `
})

export class LeftPanelComponent {
  public title = 'Left panel';
}
