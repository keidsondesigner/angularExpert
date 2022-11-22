import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})

export class HomeModule{}
