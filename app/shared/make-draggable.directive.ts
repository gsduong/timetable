/**
 * Created by gsduong on 1/19/17.
 */
import {Directive, Input, ElementRef, OnInit, Output, EventEmitter} from "@angular/core";
@Directive({
  selector: '[makeDraggable]'
})

export class Draggable implements OnInit {
  isDraggable: boolean;
  @Input('makeDraggable') data: any;

  @Output() onDragEndCallback: EventEmitter<any> = new EventEmitter();

  @Input('isDraggable') set draggable(value: boolean) {
    this.isDraggable = value;
  }

  @Input('category') selectedItem:any;
  constructor(private _elementRef: ElementRef){}

  ngOnInit(){
    /**
     * Get the current element
     */
    let el = this._elementRef.nativeElement;
    el.draggable = this.isDraggable;

    /**
     * Set up the dragstart event and add "drag-start" to class
     * data = current item
     */
    el.addEventListener('dragstart', (e: any) => {
      console.log("Drag Starts");
      el.classList.add("drag-src");
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', JSON.stringify(this.data));
    });

    el.addEventListener('dragend', (e: any) => {
      e.preventDefault();
      el.classList.remove('drag-src');
    })

  }
}
