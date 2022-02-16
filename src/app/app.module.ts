import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { GoWildDirective } from './directives/as.directive';
import { SiteButton } from './directives/site-button/button.directive';
import { LogoComponent } from './components/logo/logo.component';
import { SiteBannerComponent } from './components/site-banner/site-banner.component';
import { HeadingComponent } from './components/heading/heading.component';
import { TwoImageWithTextComponent } from './components/two-image-with-text/two-image-with-text.component';
import { HowWorksComponent } from './pages/how-works/how-works.component';
import { TextWidthImageComponent } from './components/text-width-image/text-width-image.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AssessmentComponent } from './pages/assessment/assessment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { OnlineDoctorComponent } from './components/online-doctor/site-banner.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    NavigationComponent,
    HowItWorksComponent,
    GoWildDirective,
    SiteButton,
    LogoComponent,
    SiteBannerComponent,
    HeadingComponent,
    TwoImageWithTextComponent,
    HowWorksComponent,
    TextWidthImageComponent,
    FooterComponent,
    SocialMediaComponent,
    AssessmentComponent,
    OnlineDoctorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
