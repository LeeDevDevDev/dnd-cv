import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface LoginPageStateModel {
  pending: boolean;
  error: string | null;
}

@State<LoginPageStateModel>({
  name: 'loginPage',
  defaults: {
    error: null,
    pending: false,
  },
})
@Injectable()
export class LoginPageState {
  constructor() {}
}
