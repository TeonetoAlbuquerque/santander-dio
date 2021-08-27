import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockerCardComponent } from './stocker-card/stocker-card.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardPageComponent,
    StockerCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ],

  exports: [
    DashboardPageComponent,
  ],
})
export class DashboardModule { }
