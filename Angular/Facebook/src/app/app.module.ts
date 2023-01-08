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
import { FormsModule }   from '@angular/forms';
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
    ReactivedrivenfromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
