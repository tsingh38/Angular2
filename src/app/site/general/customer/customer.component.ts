import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthenticationService} from '../../AuthenticationService';
import {SuperChildComponent} from '../../SuperChildComponent';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent extends SuperChildComponent{
  public allowed: boolean = false;

  constructor(private authenticationService : AuthenticationService) {
    super();
    this.authenticationService=authenticationService;
     this.isAllowed(this.constructor.name);
  }

 isAllowed(component: string) {
        this.allowed = this.authenticationService.isAuthentic(component);
    }

}
