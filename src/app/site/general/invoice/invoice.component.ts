import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../../AuthenticationService';
import {SuperChildComponent} from '../../SuperChildComponent';

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent extends SuperChildComponent {

 private authenticationService:AuthenticationService;

  constructor(authenticationService : AuthenticationService) {
    super(authenticationService);
    this.authenticationService=authenticationService;
    this.isAllowed(this.constructor.name);
  }
}
