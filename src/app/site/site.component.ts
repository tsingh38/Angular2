import { Component, OnInit, NgModule } from '@angular/core';
import { GeneralComponent } from "./general/general.component";
import { NavigationComponent } from "./navigation/navigation.component";

@Component({
  selector: 'site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}