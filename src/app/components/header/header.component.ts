import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems = [
     {link:"/about-us", label:"About"},
    {link:"/how-it-work", label:"How it works"},
    {link:"/immune-assessment", label:"Immune Assessment"},
    {link:"/online-doctor", label:"Online Doctor"}   
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
