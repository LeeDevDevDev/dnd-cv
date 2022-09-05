import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { LoginPageState } from './store/states/login-page.state';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    NgxsModule.forFeature([LoginPageState]),
    NgxsFormPluginModule,
  ],
})
export class LoginModule {}
