import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedElm]'
})
export class RedElmDirective {

  constructor(elm:ElementRef) {
    elm.nativeElement.style.color ='red';
    elm.nativeElement.style.backgroundColor = 'yellowgreen';
    elm.nativeElement.style.border = '1px solid black';
    elm.nativeElement.style.padding = '10px';
    elm.nativeElement.style.fontSize = '20px';
    elm.nativeElement.style.cursor = 'pointer';
    elm.nativeElement.style.transition = 'all 0.5s ease';

   }

}
