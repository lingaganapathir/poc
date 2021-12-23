import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  updateurl = 'http://localhost:8080/update';

  constructor(private http:HttpClient) {
  }

  stdData: Student;

  public setter(student: Student){
     this.stdData=student;
  }

  public save(std: Student) {
    return this.http.post('http://localhost:8080/save', std);//,{responseType: 'text' as 'json'});
  }

  public listall(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/listall');
  }

  public edit(std: Student) {
    return this.http.put('http://localhost:8080/update', std);
  }
  
  public delete(id:number){
    console.log('http://localhost:8080/delete/'+id);
    return this.http.delete('http://localhost:8080/delete/'+id);
  }

}
