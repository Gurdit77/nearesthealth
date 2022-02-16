import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-two-image-with-text',
  templateUrl: './two-image-with-text.component.html',
  styleUrls: ['./two-image-with-text.component.scss']
})
export class TwoImageWithTextComponent implements OnInit {
  @Input() heading:any;
  @Input() description:any;
  @Input() image:any;
  @Input() image2:any;
  @Input() btnText:any;
  @Input() btnLink:any;
  @Input() splitAfter:any;
  constructor() { }

  ngOnInit(): void {
  }

}
