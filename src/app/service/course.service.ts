import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

 getAuthors():string[]{
   return ["author1","author2","author3"];
 }

 getCourses():string[]{
return ["course1","course2","course3"];
 }

 
  constructor() { }

}
