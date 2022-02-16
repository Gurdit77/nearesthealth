import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineDoctorComponent } from './components/online-doctor/site-banner.component';
import { AboutComponent } from './pages/about/about.component';
import { AssessmentComponent } from './pages/assessment/assessment.component';
import { HomeComponent } from './pages/home/home.component';
import { HowWorksComponent } from './pages/how-works/how-works.component';

const routes: Routes = [
  {path:"",component:HomeComponent, data:{animation:'HomePage'}},
  {path:"about-us",component:AboutComponent, data:{animation:'AboutPage'}},
  {path:"how-it-work",component:HowWorksComponent,data:{animation:'how'} },
  {path:"online-doctor",component:OnlineDoctorComponent,data:{animation:'how'} },
  {path:"immune-assessment",component:AssessmentComponent,data:{animation:'immune'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
