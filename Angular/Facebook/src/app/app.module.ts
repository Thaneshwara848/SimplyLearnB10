import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { CarComponent } from './loan/car/car.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubePipe } from './cube.pipe';
import { TempletdrivefromComponent } from './templetdrivefrom/templetdrivefrom.component';
import { ReactivedrivenfromComponent } from './reactivedrivenfrom/reactivedrivenfrom.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { ServDemoComponent } from './serv-demo/serv-demo.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { A4Component } from './a4/a4.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    LoanComponent,
    EduComponent,
    CarComponent,
    HomeComponent,
    GalaryComponent,
    BindingComponent,
    DirectivedemoComponent,
    PipedemoComponent,
    FormdemoComponent,
    SqrPipe,
    CubePipe,
    TempletdrivefromComponent,
    ReactivedrivenfromComponent,
    ServDemoComponent,
    A1Component,
    A2Component,
    A3Component,
    A4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
