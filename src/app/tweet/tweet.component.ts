import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
@Input() public nameOfThePerson;
@Input() public tweeterHandler;
@Input() public tweetText;
@Input() public getNumberOfLikes;


}
