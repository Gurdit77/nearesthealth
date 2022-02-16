import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
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
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
