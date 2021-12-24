import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-found-id',
  templateUrl: './found-id.component.html',
  styleUrls: ['./found-id.component.css']
})
export class FoundIdComponent implements OnInit {

  std:Student[];
  stud: Student;
  id:number;
  errorMsg = null;
  constructor(private stdservice:StudentService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.stdservice.sid;
    this.stdservice.search(this.id).subscribe(data => {this.stud = data},error=>{
      this.errorMsg = error
    });
  }

  edit(student:Student){
    this.stdservice.setter(student);
    this.router.navigateByUrl('/edit');
  }
  addstd(){
    this.router.navigateByUrl('/add');
  }

  delete(id: number){
    //this.stdservice.delete(id);
    this.stdservice.delete(id).subscribe(data => {
      console.log(id)
    });
    this.stdservice.listall().subscribe(data => {
      this.std = data;
    });
    setTimeout(() => {
      this.router.navigateByUrl('/list');
    }, 200);
  }
  searchstd(id:number){
    this.errorMsg = null;
    this.stdservice.searchid(id);    
    this.id = this.stdservice.sid;
    setTimeout(() => {      
      this.stdservice.search(this.id).subscribe(data => {this.stud = data},
      error=>{
        this.errorMsg = error
      });
      console.log(this.errorMsg);
    }, 200);
    setTimeout(() => {
      this.router.navigateByUrl('/search');
    }, 400);
  }

}
