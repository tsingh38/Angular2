import { Component ,NgModule} from '@angular/core';
import{CoursesComponent} from './courses/courses.component';
import{AuthorComponent} from './author/author.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

@NgModule({
  declarations:[CoursesComponent,AuthorComponent]
})
export class AppComponent {
  title = 'app works!';
}
