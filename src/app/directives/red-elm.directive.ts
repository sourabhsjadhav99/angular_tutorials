import { Directive, ElementRef, Input, OnInit } from '@angular/core';

// ElementRef -- to get reference of the element on which we are applying the directive
@Directive({
  selector: '[appRedElm]',  // Selector to apply this directive
})
export class RedElmDirective implements OnInit {
  // To take input from the element (binding the input color)
  @Input() colorPassedFromElmToDirective: string = '';

  constructor(private elm: ElementRef) {
    // Initial styles applied when directive is instantiated
    this.elm.nativeElement.style.color = 'red';
    this.elm.nativeElement.style.backgroundColor = 'yellowgreen';
    this.elm.nativeElement.style.border = '1px solid black';
    this.elm.nativeElement.style.padding = '10px';
    this.elm.nativeElement.style.fontSize = '20px';
    this.elm.nativeElement.style.cursor = 'pointer';
    this.elm.nativeElement.style.transition = 'all 0.5s ease';
  }

  ngOnInit(): void {
    // If a color is passed from the element, update the color
    if (this.colorPassedFromElmToDirective) {
      this.elm.nativeElement.style.color = this.colorPassedFromElmToDirective;
    }
  }
}
