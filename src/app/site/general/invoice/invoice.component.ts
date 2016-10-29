import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../AuthenticationService';

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  public isAllowed = false;
  
  constructor(private authenticationService: AuthenticationService) {
    this.isAllowed = authenticationService.isAuthentic(this.constructor.name);
  }

  ngOnInit() {
  }

}
