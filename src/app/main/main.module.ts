import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MainRoutingModule, NgxsFormPluginModule],
})
export class MainModule {}
