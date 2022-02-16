import { style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-width-image',
  templateUrl: './text-width-image.component.html',
  styleUrls: ['./text-width-image.component.scss'],
  styles:['.image-bg img {    display: block;} li svg{max-width: 18px;margin-top: 7px;height: auto;position: absolute;top: 0;left: 0;}']
})
export class TextWidthImageComponent implements OnInit {
  @Input() heading:any = '';
  @Input() subHeading:any = '';
  @Input() image:any = '';
  @Input() items:any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
