import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

];
items = [
{
li:"Healing autoimmune and chronic disease is possible."
},
{
li:"Functional medicine addresses the root causes of disease."
},
{
li:"The first step is to review your health history to consider possible causes. This asessment will take approximately30 minutes."
},
{
li:"At the end of the survey you will be provided with suggested recommendations on how to improve your immune health."
}





];
constructor() { }

ngOnInit(): void {
}

}
