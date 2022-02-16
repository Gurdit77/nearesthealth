import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
@Input() navItems:any;
@Input() navStyle:any;
  constructor(private renderer:Renderer2, private el:ElementRef) { }
  ngOnInit(): void {
    if(this.navStyle == "Horizontal"){
      this.renderer.addClass(this.el.nativeElement.firstChild, 'horizontal-style'); 
    }
    else if(this.navStyle == "Vertical"){
      this.renderer.addClass(this.el.nativeElement.firstChild, 'vertical-style'); 
    }
    else{
      this.renderer.addClass(this.el.nativeElement.firstChild, 'vertical-style'); 
    }
  }

}
