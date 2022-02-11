import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { MobiquityComponent } from './career/mobiquity/mobiquity.component';
import { FisComponent } from './career/fis/fis.component';
import { TcsComponent } from './career/tcs/tcs.component';
import { BlogComponent } from './blog/blog.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    CareerComponent,
    MobiquityComponent,
    FisComponent,
    TcsComponent,
    BlogComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
