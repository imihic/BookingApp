

import { ElementRef, Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bookingHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('bookingHighlight') bookingHighlight

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.bookingHighlight;
  }
}
