import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'online-doctor',
  templateUrl: './site-banner.component.html',
  styleUrls: ['./site-banner.component.scss']
})
export class OnlineDoctorComponent implements OnInit {
@Input() bgColor:any = "#7fc0db";
  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.firstChild.setAttribute("style", `background-color:${this.bgColor}`  );        
  }

}
