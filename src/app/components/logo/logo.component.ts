import { Component, OnInit,Input,Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'site-logo',
  template: '<a routerLink="/" class="site-logo"><img src="./assets/Header/logo.svg"/></a>',
  styles: ['']
})
export class LogoComponent implements OnInit {
@Input() width:any = "220px";
  constructor(private renderer:Renderer2, private el:ElementRef) { }
  ngOnInit(): void {
           this.el.nativeElement.firstChild.setAttribute("style", `width:${this.width}`  );
  }

}
