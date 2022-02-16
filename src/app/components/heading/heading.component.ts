import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';


@Component({
selector: 'heading',
template:'',
styles:[':host .site--heading{font-size: 37px;font-weight: 400;color: #000;line-height: 1;text-align: left;text-transform: none;letter-spacing: .5px;margin-bottom: 25px;}']
})
export class HeadingComponent implements OnInit {
@Input() headingType?:any = "h2";
@Input() heading?:any = '';
@Input() ui?:any = '';
@Input() tag?:any;
constructor(
  private el:ElementRef,
  private renderer:Renderer2   
) { }
styling(){ 

  setTimeout(() =>{
this.renderer.appendChild(this.el.nativeElement,this.renderer.createElement(this.headingType));
this.heading != ''? this.el.nativeElement.firstElementChild.innerHTML = `${this.heading}`: ''
let uiStyle = this.ui.split(';');

for(var i = 0; i < uiStyle.length; i++){
  let uiStyles = uiStyle[i].split(':');
  this.ui != ''? this.renderer.setStyle(this.el.nativeElement.firstElementChild,uiStyles[0],uiStyles[1]) : ''
}

            }, 0)
// setTimeout(() =>{
//               this.ui != ''? this.renderer.setAttribute(this.el.nativeElement.firstElementChild,"style", this.ui): ''       
//             }, 5)
          }
ngOnInit(): void {
  //headingType
  if(this.headingType == "h1" || this.headingType == "h2" || this.headingType == "h3" || this.headingType == "h4" || this.headingType == "h5" || this.headingType == "h6" ){
  setTimeout(() =>{    this.renderer.addClass(this.el.nativeElement.firstElementChild,"site--heading");      }, 10) 
  }
  this.styling() 
}

}
