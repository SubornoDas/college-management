import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  courses:Course[] |undefined;
  constructor(private authService: AuthServiceService,private router: Router){}


  ngOnInit() : void{
    this.getCourses();
  }
  private getCourses()
  {
    this.authService.getAllCourses().subscribe(data=>
      {this.courses=data;});
  }
  deleteCourse(subId:number)
{
  this.authService.deleteCourseById(subId).subscribe(
    data=>
    {this.router.navigate(['courses']);}
  );
  }
  updateCourse(subId:number)
  {
    {this.router.navigate(['updateCourse',subId]);}
  }
  reloadPage(){
    window.location.reload();
  }
}
  
  

  


