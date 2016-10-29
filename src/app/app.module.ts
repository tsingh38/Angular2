import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SiteComponent } from './site/site.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './site/navigation/navigation.component';
import { GeneralComponent } from './site/general/general.component';
import { CustomerComponent } from './site/general/customer/customer.component';
import { InvoiceComponent } from './site/general/invoice/invoice.component';
import {LocalStorageService} from "angular2-localstorage/LocalStorageEmitter";
import {AuthenticationService} from "./site/AuthenticationService";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiteComponent,
    GeneralComponent,
    NavigationComponent,
    GeneralComponent,
    CustomerComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'site', component: SiteComponent },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent }
    ])
  ],
  providers: [LocalStorageService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(storageService: LocalStorageService){}
}