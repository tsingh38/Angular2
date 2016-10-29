import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthenticationService} from '../../AuthenticationService';
import {SuperChildComponent} from '../../SuperChildComponent';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[AuthenticationService]
})
export class CustomerComponent extends SuperChildComponent{
  private authenticationService:AuthenticationService;
  constructor(authenticationService : AuthenticationService) {
    super(authenticationService);
    this.authenticationService=authenticationService;
     this.isAllowed(this.constructor.name);
  }



}
