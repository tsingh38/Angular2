import { Component, OnInit } from '@angular/core';
import {CustomerComponent} from "./customer/customer.component";
import {InvoiceComponent} from "./invoice/invoice.component";
import {SuperParentComponent} from "../SuperParentComponent";
import { Router } from '@angular/router';
import {AuthenticationService} from "../AuthenticationService";
@Component({
  selector: 'general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent extends SuperParentComponent  {

  constructor(private router: Router, private authenticationService: AuthenticationService) { 
    super();
   this.validateSession();
  }



    validateSession() {
        if (!this.authenticationService.isUserLoggedIn()) {
            this.router.navigate(['/login']);
        }
    }
}