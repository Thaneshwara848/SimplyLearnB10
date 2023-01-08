import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'forms',
    component:FormdemoComponent
  },
  {
    path:'pipe',
    component:PipedemoComponent
  },
  {
    path:'directivedemo',
    component:DirectivedemoComponent
  },
  {
    path:'bind',
    component:BindingComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'galary',component:GalaryComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
