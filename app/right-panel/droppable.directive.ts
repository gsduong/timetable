import { Directive, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[makeDroppable]'
})
export class MakeDroppable implements OnInit {
    @Output() dropped: EventEmitter<any> = new EventEmitter();

    constructor(private _elementRef: ElementRef) {}

    ngOnInit() {
        let el = this._elementRef.nativeElement;
        let dragged:any;
        // Add a style to indicate that this element is a drop target
        el.addEventListener('dragenter', (e:any) => {
            if ( e.target.className == "dropzone" ) {
                e.target.style.background = "gray";
                console.log("dragenter");
            }
        });

        // Remove the style
        el.addEventListener('dragleave', (e:any) => {
            if ( e.target.className == "dropzone" ) {
                e.target.style.background = "";
                console.log("dragleave");
            }
        });

        el.addEventListener('dragover', (e:any) => {
            if (e.preventDefault) {
                e.preventDefault();
            }

            e.dataTransfer.dropEffect = 'copy';
            return false;
        });

        // On drop, get the data and convert it back to a JSON object
        // and fire off an event passing the data
        el.addEventListener('drop', (e:any) => {
            e.preventDefault();
            if ( e.target.className == "dropzone" ) {
                e.target.style.background = "";
                let nodeCopy = dragged.cloneNode(true);
                nodeCopy.attributes.draggable = false;
                console.log(nodeCopy.attributes.draggable);
                e.target.appendChild( nodeCopy );
                console.log("drop");
            }
        })
    }
}
