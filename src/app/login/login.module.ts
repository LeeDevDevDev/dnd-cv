import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { LoginPageState } from './store/states/login-page.state';
import { BrandHeaderComponent } from '../shared/ui/brand-header/brand-header.component';

@NgModule({
  declarations: [LoginComponent, BrandHeaderComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgxsModule.forFeature([LoginPageState]),
    NgxsFormPluginModule,
  ],
})
export class LoginModule {}
