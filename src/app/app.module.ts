import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRouting, appRoutingProviders } from './app.routing';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { EmployCreationComponent } from './home/human-resource/employ-creation/employ-creation.component';
import { PartyCreationComponent } from './home/human-resource/party-creation/party-creation.component';
import { CompanyCreationComponent } from './home/human-resource/company-creation/company-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    EmployCreationComponent,
    PartyCreationComponent,
    CompanyCreationComponent
  ],
  imports: [
    BrowserModule, 
    appRouting,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
