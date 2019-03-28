import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    templateUrl: 'name.component.html'
})

export class InputPipe   {
    constructor() { }

inputNumberFormat(event:any){
    return event.charCode >= 48 && event.charCode <= 57;
}



}