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
import { HttpModule } from "@angular/http";
import { MainGroupCreationComponent } from './home/item-creations/main-group-creation/main-group-creation.component';
import { SubGroupCreationComponent } from './home/item-creations/sub-group-creation/sub-group-creation.component';
import { ItemCreationComponent } from './home/item-creations/item-creation/item-creation.component';
import { SizeLengthCreationComponent } from './home/item-creations/size-length-creation/size-length-creation.component';
import { WastageMcCreationComponent } from './home/item-creations/wastage-mc-creation/wastage-mc-creation.component';
import { PurityCreationComponent } from './home/master-creation/purity-creation/purity-creation.component';
import { RateCreationComponent } from './home/master-creation/rate-creation/rate-creation.component';
import { CounterCreationComponent } from './home/master-creation/counter-creation/counter-creation.component';


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
    CompanyCreationComponent,
    MainGroupCreationComponent,
    SubGroupCreationComponent,
    ItemCreationComponent,
    SizeLengthCreationComponent,
    WastageMcCreationComponent,
    PurityCreationComponent,
    RateCreationComponent,
    CounterCreationComponent
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
