import { Component, OnInit } from '@angular/core';
import {CourseService} from '../service/course.service';



@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers:[CourseService]
})


export class AuthorComponent {
   
authors :string[];

  constructor(courseService :CourseService) { 
this.authors=courseService.getAuthors();
  }

}
