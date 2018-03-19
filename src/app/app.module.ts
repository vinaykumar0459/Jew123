import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRouting, appRoutingProviders } from './app.routing';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule, 
    appRouting,
    FormsModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
