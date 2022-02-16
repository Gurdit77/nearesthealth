import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[siteButton]'
})
export class SiteButton implements OnInit {
  @Input('siteButton') style:any;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {  

    if(this.style == 'default'){
      this.renderer.addClass(this.el.nativeElement, 'btn-default');
    }
    else if(this.style == 'dark'){
      this.renderer.addClass(this.el.nativeElement, 'btn');
      this.renderer.addClass(this.el.nativeElement, 'btn-dark');
    }
    else if(this.style == 'light'){
      this.renderer.addClass(this.el.nativeElement, 'btn');
      this.renderer.addClass(this.el.nativeElement, 'btn-light');
    }
    else{
      this.renderer.addClass(this.el.nativeElement, 'btn-default');
    }
  }
}