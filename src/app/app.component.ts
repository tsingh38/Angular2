import { Component ,NgModule} from '@angular/core';
import{CoursesComponent} from './courses/courses.component';
import{AuthorComponent} from './author/author.component';
import{StarComponent} from './star/star.component';
import{HeartComponent} from './heart/heart.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})

@NgModule({
  declarations:[CoursesComponent,AuthorComponent,HeartComponent]
})
export class AppComponent {
  title = 'app works!';
}
