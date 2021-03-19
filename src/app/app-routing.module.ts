import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AdminComponent} from './component/admin/admin.component';
import {LoginHomeComponent} from './component/login-home/login-home.component';
import {RegisComponent} from "./component/regis/regis.component";


const routes: Routes = [
  {
    path: 'regis',
    component: RegisComponent
  },
  {
    path: 'admin' ,
    component: AdminComponent
  },
  {
    path: 'loginHome',
    component: LoginHomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
