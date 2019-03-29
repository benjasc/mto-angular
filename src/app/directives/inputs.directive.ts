import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appInputs]'
})
export class InputsDirective {

  constructor(private element: ElementRef) { }

  @HostListener('keypress',['$event'])
  onKeyPress(event){
        return event.keyCode>=48 && event.keyCode<=57;
    }

}
