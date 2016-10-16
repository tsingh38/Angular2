import { Component } from '@angular/core';
import {CoursesComponent} from '../courses.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  directives: [CoursesComponent]
})
export class AppComponent {
  title = 'app works!';
}
