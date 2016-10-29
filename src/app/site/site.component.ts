import { Component, OnInit, NgModule } from '@angular/core';
import { GeneralComponent } from "./general/general.component";
import { NavigationComponent } from "./navigation/navigation.component";
import {SuperParentComponent} from "./SuperParentComponent";
import { Router } from '@angular/router';
import {AuthenticationService} from "./AuthenticationService";

@Component({
  selector: 'site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent extends SuperParentComponent{
  constructor(private router: Router, private authenticationService: AuthenticationService) { 
    super();
    this.validateSession(router,authenticationService);
  }
}