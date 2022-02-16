import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'site-banner',
  templateUrl: './site-banner.component.html',
  styleUrls: ['./site-banner.component.scss']
})
export class SiteBannerComponent implements OnInit {
@Input() heading:any;
@Input() description:any;
@Input() image:any;
@Input() btnText:any;
@Input() btnLink:any;
@Input() bgColor:any;
@Input() splitAfter:any;
  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.firstChild.setAttribute("style", `background-color:${this.bgColor}`  );        
  }

}
