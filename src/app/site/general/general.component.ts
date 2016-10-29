import { Component, OnInit } from '@angular/core';
import {CustomerComponent} from "./customer/customer.component";
import {InvoiceComponent} from "./invoice/invoice.component";
@Component({
  selector: 'general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
