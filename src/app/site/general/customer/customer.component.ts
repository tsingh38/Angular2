import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../AuthenticationService';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[AuthenticationService]
})
export class CustomerComponent implements OnInit{
   public isAllowed=false;
  constructor(private authenticationService : AuthenticationService) {
    this.isAllowed=authenticationService.isAuthentic(this.constructor.name);
   }

  ngOnInit() {
  }

}
