import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable, from } from 'rxjs';
import { Teacher } from './teacher';
import { Course } from './course';
import { Params } from '@angular/router';
const TEACHER='http://localhost:8080/teacher/';
const deleteTeach='http://localhost:8080/teacher/deleteTeacherById/';
const COURSE='http://localhost:8080/course/';
const deleteCourse='http://localhost:8080/course/deleteCourseById/';
const updateTeacher='http://localhost:8080/teacher/updateTeacher';
const getTeacherById='http://localhost:8080/teacher/getTeacherById';
const createCourse='http://localhost:8080/course/createCourse';
const assigning='http://localhost:8080/course/assignTeacherToCourse'
const updateCourse='http://localhost:8080/course/updateCourseById/';
const getCourseById='http://localhost:8080/course/getCourseById/';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  getAllTeachers(): Observable<Teacher[]>
  {
return this.http.get<Teacher[]>(TEACHER+'getAllTeachers',httpOptions);
  }
  
deleteTeacherById(id:number): Observable<Object>
{
  return this.http.delete(`${deleteTeach}/${id}`);
}
getAllCourses(): Observable<Course[]>
{
  return this.http.get<Course[]>(COURSE+'getAllCourseDetails',httpOptions);
}
deleteCourseById(subId:number): Observable<Object>
{
  return this.http.delete(`${deleteCourse}/${subId}`);
}
createTeacher(teacher: Teacher): Observable<Object>
{
  return this.http.post<any>(TEACHER+'createTeacher',teacher,httpOptions);
}
updateTeacherById(id:number,teacher:Teacher):Observable<Object>{
  
  return this.http.put<any>(`${updateTeacher}/${id}`,teacher);
}
getTeacherById(id:number):Observable<Teacher>
{
  return this.http.get<Teacher>(`${getTeacherById}/${id}`);
}
createCourse(course: Course): Observable<object>{
  return this.http.post(COURSE+'createCourse',course,httpOptions);
}

assign(teacherId: number, courseId: number): Observable<Params>
  {
    return this.http.post(`${assigning}/${teacherId}/${courseId}`,httpOptions);
  }

updateCourseById(id:number,course:Course):Observable<Object>{
  
  return this.http.put<any>(`${updateCourse}/${id}`,course);
}
getCourseById(id:number):Observable<Course>
{
  return this.http.get<Course>(`${getCourseById}/${id}`);
}
}

