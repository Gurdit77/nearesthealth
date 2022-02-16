import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-works',
  templateUrl: './how-works.component.html',
  styleUrls: ['./how-works.component.scss']
})
export class HowWorksComponent implements OnInit {
  howItWorksItems:any =[
    {
    image:'./assets/images/step1.jpg',heading:'Step 1',description:'<strong>Take a free, online assessment</strong><br>which helps you understand<br>root causes.'
    },
    {
    image:'./assets/images/step2.jpg',heading:'Step 2',description:'This assessment helps offer<br><strong>recommendations </strong>on how to<br>improve your immune health.'
    },
    {
    image:'./assets/images/step3.jpg',heading:'Step 3',description:'Based on the assessment, you can opt to purchase <strong>diagnostic tests and supplements.<br></strong>'
    },
    {
    image:'./assets/images/step4.jpg',heading:'Step 4',description:'We also offer more<strong> personalized<br>treatment </strong>with functional medicine doctor recommendations'
    }
    
    ]
    
  constructor() { }

  ngOnInit(): void {
  }

}
