import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<string[]>({
  name: 'test',
})
@Injectable()
export class LoginState {}
