import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: Course=new Course();
  subId!:number;

  constructor(private authService: AuthServiceService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
      this.subId=this.route.snapshot.params['subId'];
      this.authService.getCourseById(this.subId).subscribe(data=>
        {this.course=data;});
      }

      form=new FormGroup(
        {
          subId: new FormControl("",[Validators.required,Validators.minLength(1)]),
          subName: new FormControl("",[Validators.required,Validators.minLength(3)]),
          price: new FormControl("",[Validators.required,Validators.minLength(3)]),
         
        }
      );
  
        get f()
        {
          return this.form.controls;
        }

        onSubmit(){
          this.authService.updateCourseById(this.subId,this.course).subscribe(
            data=>{
              console.log(data);
              this.router.navigate(['/course']);
            },
            error=>console.log(error)

          );
        };
        goToCourseList()
        {
          this.router.navigate(['/course']);
        }
      }
  
    


