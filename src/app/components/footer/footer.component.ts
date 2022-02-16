import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() navItems = 
[
  {link:"/blog", label:"Blog"},
  {link:"/contact-us", label:"Contact Us"},
  {link:"/terms", label:"Terms & Conditions"} 

];
  constructor() { }

  ngOnInit(): void {
  }

}
