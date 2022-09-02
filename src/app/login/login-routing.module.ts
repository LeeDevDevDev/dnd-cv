import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), MatButtonModule],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
