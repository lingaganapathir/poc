import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Student } from './student';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  updateurl = 'http://localhost:8080/update';

  constructor(private http:HttpClient) {
  }

  stdData: Student;
  sid: number;

  public setter(student: Student){
     this.stdData=student;
  }

  public searchid(id: number){
    this.sid = id;
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
   return this.http.delete('http://localhost:8080/delete/'+id);
  }

  public search(id:number):Observable<Student>{
    return this.http.get<Student>('http://localhost:8080/list/'+id).pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
        console.error('An error occurred:', httpError.error.message);
    }
    // Return an observable with a user-facing error message.
    return throwError(`${httpError.error} Not found, `+'please try again.');
  }

}
