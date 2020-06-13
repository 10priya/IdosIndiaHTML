import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { FaqComponent } from './faq/faq.component';
import { KeyCapabilitesComponent } from './key-capabilites/key-capabilites.component';
import { CustomizeModuleComponent } from './customize-module/customize-module.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { RecognitinsComponent } from './recognitins/recognitins.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutUsComponent,
    FeaturesComponent,
    FaqComponent,
    KeyCapabilitesComponent,
    CustomizeModuleComponent,
    CaseStudyComponent,
    TestimonialComponent,
    OurTeamComponent,
    RecognitinsComponent,
    CompanyInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
