import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent{
@Input() public numberOfLikes;
isSelected:boolean=false;
  OnClick(){
    this.isSelected=!this.isSelected;
    this.numberOfLikes+=(this.isSelected)?+1:-1;
  }

}
