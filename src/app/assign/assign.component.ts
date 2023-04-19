import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
 
  teachId!: number;
  courseId!: number;
constructor(private authService: AuthServiceService, private router: Router){}
  

ngOnInit(): void {
   
  }

  form = new FormGroup(
    {
      teachId: new FormControl("",[Validators.required,Validators.minLength(1)]),
      courseId : new FormControl("",[Validators.required,Validators.minLength(1)])
    }
  );

  get f()
  {
    return this.form.controls;
  }

  onSubmit()
  {
    this.authService.assign(this.teachId,this.courseId).subscribe(
      data=>{
        console.log('SUCCESS',data);
        this.goToCourseList();
      }
    );
  };

  goToCourseList()
  {
    this.router.navigate(['/courses']);
  }
}
