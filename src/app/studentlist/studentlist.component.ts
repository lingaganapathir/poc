import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  std:Student[];
  constructor(private stdservice:StudentService,private router: Router) { }

  ngOnInit(){
    this.stdservice.listall().subscribe(data => {
      this.std = data;
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
      console.log("deleted.")
    });
  }

  searchstd(id:number){
    this.stdservice.search(id).subscribe(data => {
      console.log("done.")
    });
  }

}
