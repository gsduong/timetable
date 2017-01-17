import { Directive , OnInit, Input, ElementRef} from '@angular/core';

@Directive({
    selector: '[makeDraggable]'
})
export class MakeDraggable implements OnInit {
    @Input('makeDraggable') data: any;

    constructor(private _elementRef: ElementRef) {}

    ngOnInit() {
        // Get the current element
        let el = this._elementRef.nativeElement.querySelector('li');

        // Set the draggable attribute to the element
        //el.draggable = 'true';
        let dragged:any;

        // Set up the dragstart event and add the drag-src CSS class
        // to change the visual appearance. Set the current todo: as the data
        // payload by stringifying the object first
        el.addEventListener('dragstart', (e:any) => {
            // store a ref. on the dragged elem
            dragged = event.target;
            // make it half transparent
            console.log("dragstart");
        });

        // Remove the drag-src class
        el.addEventListener('dragend', (e:any) => {
            e.target.style.opacity = "";
        });
    }
}
