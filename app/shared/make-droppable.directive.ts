import {Directive, OnInit, Output, EventEmitter, ElementRef} from "@angular/core";
import {TimeTableItem} from "../TimeTableItem";
/**
 * Created by gsduong on 1/20/17.
 */
@Directive({
  selector: '[makeDroppable]'
})
export class Droppable implements OnInit {

  @Output() dropped: EventEmitter<any> = new EventEmitter();
  constructor(private elementRef: ElementRef){

  }

  ngOnInit() {
    let el = this.elementRef.nativeElement;

    /**
     * Add a class to indicate drag entering
     */
    el.addEventListener('dragenter', (e: any) => {
      el.classList.add('drag-enter');
    });

    /**
     * Remove the style
     */
    el.addEventListener('dragleave', (e: any) => {
      el.classList.remove('drag-enter');
    });

    el.addEventListener('dragover', (e: any) => {
      if (e.preventDefault) {
        e.preventDefault();
      }

      e.dataTransfer.dropEffect = 'move';
      return false;
    });

    /**
     * On drop, get the data and convert it back to a JSON object
     * and fire off the event passing the data
     */

    el.addEventListener('drop', (e: any) => {
      if (e.stopPropagation) {
        e.stopPropagation(); /* Stop some browser from redirecting */
      }

      el.classList.remove('over');
      let subjectString = e.dataTransfer.getData('text');
      let subject = JSON.parse(subjectString); /* subject to be dropped */

      let targetElement = e.target;
      let targetId = targetElement.getAttributeNode('id');

      if (!el.children.length) { /* check if there is already a subject dropped */

        let targetElement = e.target;
        let targetId = targetElement.getAttributeNode('id').value;
        let item = new TimeTableItem();
        item.setSubject(subject);
        item.setTimeTableId(targetId);
        this.dropped.emit(item);
      }
      return false;
    })
  }
}
