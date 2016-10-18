import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
isFavourite : boolean=true;

onClick(){
this.isFavourite=!this.isFavourite;
}
}
