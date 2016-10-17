import { Component, OnInit,NgModule } from '@angular/core';
import {CourseService} from '../service/course.service';
import {AutoGrowDirective} from '../directives/auto-grow.directive';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[CourseService]
})

@NgModule({
  declarations:[AutoGrowDirective]
})
export class CoursesComponent {

  title:string="the title of courses page";
  courses:string[];
  courseService:CourseService;
  constructor(courseService:CourseService) {
    this.courses=courseService.getCourses();
   }

   

  ngOnInit() {
  }

}
